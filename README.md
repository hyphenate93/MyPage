# Andreasostlin.com
**My portfolio website.**

# Getting Started

## Running locally

When you are initially working on your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

## Setting up and running the project on Windows with Visual Studio Code

Follow these steps to get the project running locally on your Windows machine using VS Code:

### 1. Clone the repository

```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Install Ruby and Node.js

- **Ruby**: Install the latest Ruby installer for Windows from [RubyInstaller](https://rubyinstaller.org/). During the installation, ensure you select the option "Add Ruby executables to your PATH."

- **Node.js**: Install the latest LTS version from [Node.js official website](https://nodejs.org/en/). Ensure that Node.js is available in your terminal by running:

```bash
node -v
```

### 3. Install Bundler

Open a new terminal in VS Code and run:

```bash
gem install bundler
```

### 4. Install Ruby dependencies

Run this command in your terminal inside the project's root directory:

```bash
bundle install
```

If you encounter errors, delete the file `Gemfile.lock` and try again.

If you receive permission-related errors, configure bundler to install dependencies locally:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

If successful, you should see a new folder named `vendor`. Open `.gitignore` and add the following line to ensure this folder isn't tracked:

```
vendor/
```

### 5. Run the Jekyll server

Start the server by executing:

```bash
bundle exec jekyll serve -l -H localhost
```
**Forked from Academic Pages on GitHub Pages.**

```

Your site will now be accessible at [http://localhost:4000](http://localhost:4000). Jekyll will automatically rebuild and refresh the page whenever you make changes.

You should now be able to view and edit the project locally with Visual Studio Code.
