# Parsley :herb:

Parses CSV files and help streamline monthly budgeting by automating the creation of credit card transactions.

## Description :memo:

Notion has gained popularity as a versatile tool for organizing various aspects of everyday life. One common use is for tracking personal finances. However, manually creating an entry in Notion's table database for every transaction can be incredibly tedious. This project aims to simplify and automate the process of creating these entries.

See it in action in this [demo video](https://youtu.be/YW1HkkukXc0)!

## Getting Started :hammer:

If haven't done so, please make sure backend is set up following this [guide](src/server/README.md).

1. `cd` into the `server` directory and run the following commands:

    ```bash
    yarn install
    yarn build
    ```

2. Open another terminal & epeat step 1 but within the `client` directory

3. Run `yarn dev`

4. Go to localhost url to interact with application

The application can be used as a widget in Notion or by going to the localhost address. To embed it, simply copy the localhost url, create an embded block in Notion, and paste the url.

 > **_NOTE:_** When the application is stopped in the terminal, the widget will appear blank. Refresh Notion when spinning up the application again.

## Tools :toolbox:

* React
* React Styled Components
* Typescript
* Express
* Node
* Notion
