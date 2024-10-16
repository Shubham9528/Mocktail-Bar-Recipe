import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const port = 3000;
const app = express();



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



let apiInfo;
app.get("/", async (req, res) => {
    try {


        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const result = response.data;
        //const json = JSON.stringify(result)

        // apiInfo = JSON.parse(result.strDrink)
         console.log(result);
        // console.log(req.body.auth);
        res.render("index.ejs", {

            data: result,
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: "Resource not found",
        });

    }

});

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
}
);