from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# Inicializar o banco de dados SQLite
def init_db():
    conn = sqlite3.connect('loja.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            descricao TEXT,
            tamanho TEXT,
            preco REAL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    conn = sqlite3.connect('loja.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM produtos')
    produtos = cursor.fetchall()
    conn.close()
    return render_template('index.html', produtos=produtos)

@app.route('/adicionar', methods=['POST'])
def adicionar_produto():
    nome = request.form['nome']
    descricao = request.form['descricao']
    tamanho = request.form['tamanho']
    preco = request.form['preco']
    
    conn = sqlite3.connect('loja.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO produtos (nome, descricao, tamanho, preco) VALUES (?, ?, ?, ?)',
                   (nome, descricao, tamanho, preco))
    conn.commit()
    conn.close()
    
    return redirect('/')

@app.route('/editar/<int:id>', methods=['GET', 'POST'])
def editar_produto(id):
    conn = sqlite3.connect('loja.db')
    cursor = conn.cursor()
    
    if request.method == 'POST':
        nome = request.form['nome']
        descricao = request.form['descricao']
        tamanho = request.form['tamanho']
        preco = request.form['preco']
        cursor.execute('''
            UPDATE produtos
            SET nome = ?, descricao = ?, tamanho = ?, preco = ?
            WHERE id = ?
        ''', (nome, descricao, tamanho, preco, id))
        conn.commit()
        conn.close()
        return redirect('/')
    
    cursor.execute('SELECT * FROM produtos WHERE id = ?', (id,))
    produto = cursor.fetchone()
    conn.close()
    return render_template('editar.html', produto=produto)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
