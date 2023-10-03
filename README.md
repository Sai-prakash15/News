<div align="center">
  <h1 align="center">GistNews</h1>
  <h2 align="center">News Application with Metaphor and Chat GPT</h2>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
</div>

## About

This news application is powered by Metaphor and Chat GPT, integrating the capabilities of both services to provide users with summarized information from various sources. Each request made to the application fetches information from Metaphor, retrieves contents from specified URLs, and utilizes Chat GPT for summarization. The summarized results are then presented to the user.

Link to Live Site: https://news-xi-steel.vercel.app/

## Features
- Metaphor Integration: Utilizes Metaphor to gather information related to the provided queries.

- Content Retrieval: Retrieves content from specified URLs related to the requested information.

- Chat GPT Summarization: Leverages Chat GPT for summarizing the retrieved information, providing users with concise and easy-to-understand summaries.

## Usage
1. Setting up the Environment:
    - Make sure you have the necessary environment and dependencies set up for both the frontend and backend.
2. Running the Application:
    - Start the backend server which integrates Metaphor and Chat GPT:
      ```
      cd news_backend
      pip install -r requirements.txt
      export METAPHOR_API_KEY=<metaphor-api-key>
      export OPENAI_API_KEY=<openai-api-key>
      flask run
      ```
    - Start the frontend application to access the features:
      ```
      cd frontend
      npm install
      npm start
       ```
3.  Using the Application:
    -  Open the application in a web browser and input your query or topic of interest.
    -  Submit the query to trigger the application to fetch information, retrieve contents, and summarize using Metaphor and Chat GPT.
    -  View the summarized results displayed by the application.

## Dependencies
- Backend: Flask, Metaphor API, Chat GPT API. Python version: 3.11
- Frontend: React, node version: 8.19.2

## Configuration
- Backend: Configure API keys and endpoints for Metaphor and Chat GPT in the backend application.

## License
This project is licensed under the MIT License.


