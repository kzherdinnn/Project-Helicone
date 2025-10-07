# Project Helicone: AI Conversation Gateway 🚀

<p align="center">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>

## Table of Contents
* [Overview](#overview)
* [Why Project-Helicone?](#why-project-helicone)
* [Tech Stack](#tech-stack-️)
* [Getting Started](#getting-started-)
* [Contributing](#contributing-)
* [License](#license-)

## Overview
Project-Helicone is a developer-centric tool designed to simplify the integration of conversational AI into applications. It facilitates user interactions with language models by capturing prompts and retrieving responses through **Groq**, with **Helicone** acting as an observability and analytics platform. This ensures optimized and monitored API access within a cohesive architecture.

## Why Project-Helicone?
This project aims to streamline the development of AI-powered conversational interfaces. The core features include:

* **🧩🔑 Environment Management**: Securely manage API keys through `.env` configurations for seamless and safe setup.
* **🚀⚡ API Optimization & Observability**: Leverage **Groq** for faster, more efficient API calls to language models, and **Helicone** to monitor, debug, and analyze API usage.
* **💬📝 Interactive Conversational Entry Point**: The script serves as an interactive terminal for executing and managing conversational queries in real-time.
* **🔧🛠 Dependency Orchestration**: Handles all necessary dependencies and configurations to ensure smooth application operation.
* **🌐🌟 Integration Ready**: Easily embed within larger applications to enhance AI-driven functionalities.

## Tech Stack 🛠️
* **Core Language**: JavaScript
* **Runtime**: Node.js
* **LLM Provider**: Groq
* **Observability Platform**: Helicone
* **Package Manager**: npm
* **Version Control**: Git

## Getting Started 🏁
Follow these steps to set up and run the project in your local environment.

### Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/en/) (which includes npm)
* [Git](https://git-scm.com/)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/kzherdinnn/Project-Helicone.git](https://github.com/kzherdinnn/Project-Helicone.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Project-Helicone
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your API keys:
    ```env
    GROQ_API_KEY="gsk_YourGroqApiKey"
    HELICONE_API_KEY="sk-helicone-YourHeliconeApiKey"
    ```

### Usage
Run the interactive script from your terminal:
```bash
node demo.js
