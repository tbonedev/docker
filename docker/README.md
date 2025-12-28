# Docker Manager

A desktop application for managing Docker containers and images built with Tauri, React, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Rust](https://www.rust-lang.org/tools/install)
- [Docker](https://www.docker.com/get-started) (running locally)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tbonedev/docker-v1.git
cd docker-v1/docker
```

2. Install dependencies:
```bash
yarn install
```

## Running the Application

Development mode:
```bash
yarn tauri dev
```

Build for production:
```bash
yarn tauri build
```

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Rust + Tauri
- **Docker API**: Bollard
