from flask import Flask, render_template, request, redirect, make_response
from datetime import datetime, timedelta

app = Flask(__name__)


@app.route("/")
def index():
    font = request.cookies.get("font")
    color = request.cookies.get("color")
    expiration = request.cookies.get("expiration")
    visited_links = request.cookies.get("visited_links")

    return render_template(
        "index.html",
        font=font,
        color=color,
        expiration=expiration,
        visited_links=visited_links,
    )


@app.route("/set-preferences", methods=["POST"])
def set_preferences():
    font = request.form.get("font")
    color = request.form.get("color")

    if font is None:
        font = "system-ui"

    if color is None:
        color = "#333333"

    expiration_time = datetime.now() + timedelta(days=1)

    response = make_response(redirect("/"))
    response.set_cookie("font", font, expires=expiration_time)
    response.set_cookie("color", color, expires=expiration_time)
    response.set_cookie(
        "expiration",
        expiration_time.strftime("%Y-%m-%d %H:%M:%S"),
        expires=expiration_time,
    )

    return response


if __name__ == "__main__":
    app.run(debug=True)
