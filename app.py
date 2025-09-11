from flask import Flask, render_template
import os
from dotenv import load_dotenv

# Load environment variables (虽然不再需要邮件配置，但保留以便未来可能的使用)
load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
