# My Resume

Hi! I'm Terence, a full stack developer and this is my resume built in React with Tailwind CSS.

![GitHub last commit](https://img.shields.io/github/last-commit/DevTK0/resume?label=last%20update)

Access the site here:  
https://devtk0.github.io/resume/

You can also download the PDF version of the site here:  
https://github.com/devtk0/resume/raw/main/terence_kong_resume.pdf

# Generate the PDF

This project uses puppeteer to generate the PDF from the website. To generate the PDF, simple run the generate-pdf.js script in the pdf folder or alternatively, run the script in the package.json. Please make sure a local server is running first before running the script as the pdf will be generated based on the site in localhost:3000.

```
npm start
npm run pdf
```

# Publishing the site

For convenience, i've added a script to publish changes to the site.

`npm run publish`

The script will do the following:

1. Generate a build using npm run build
2. Commit the build changes
3. Re-generate the PDF
4. Commit the PDF changes
5. Push the changes to main
6. Push the build subtree to the gh-pages branch

The site will be hosted through the gh-pages branch.

# Favicon Logo

The favicon logo was generated using the following website:  
https://favicon.io/favicon-generator/
