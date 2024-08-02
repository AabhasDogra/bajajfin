import subprocess

# Log in to Heroku
subprocess.run(["heroku", "login", "-i"])  # This will prompt you for your Heroku credentials

# Create a new Heroku app
app_name = "your-app-name"
subprocess.run(["heroku", "create", app_name])

# Initialize Git, add files, and commit
subprocess.run(["git", "init"])
subprocess.run(["git", "add", "."])
subprocess.run(["git", "commit", "-m", "Initial commit"])

# Set Heroku remote and push to deploy
subprocess.run(["heroku", "git:remote", "-a", app_name])
subprocess.run(["git", "push", "heroku", "master"])
