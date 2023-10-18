<h1 align=center>Syncer Edge API</h1>

> **Note**
> This project is in a `Work In-Progress` phase.

## Overview

This project utilizes Next.js's built-in API routes to create a serverless API. The API routes are located in the `pages/api` directory.

## API Routes

### `GET` `/api/hello`

This route is used to test if the API is working. It will return a simple JSON object with a `message` property.

### `POST` `/api/v1/github`

This route is used to receive GitHub webhooks. It will receive a `push` event and then trigger an event on Discord/Github to sync issues together.
