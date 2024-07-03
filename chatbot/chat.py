import google.generativeai as genai
from flask import Flask, render_template , request

app = Flask(__name__)

genai.configure(api_key="AIzaSyBWG7meX6vZFuXCzZnNGE2ZxulYgaQj4no")
model = genai.GenerativeModel('gemini-pro')

conversations = []

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        prompt = request.form["prompt"]
        generated_text = generate_text(prompt)
        return render_template("index.html", prompt=prompt, generated_text=generated_text)
    else:
        return render_template("index.html", chat=conversations )


        
def generate_text(prompt):
    response = model.generate_content(prompt)
    conversations.append({'content':prompt})
    return response.text


if __name__ == "__main__":
    app.run(debug=True)