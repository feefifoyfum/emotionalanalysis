from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    """Main page with coin flip interface"""
    return render_template('index.html')

@app.route('/flip')
def flip_coin():
    """API endpoint to flip the coin"""
    result = random.choice(['heads', 'tails'])
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
