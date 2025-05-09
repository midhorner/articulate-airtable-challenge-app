This is a React application in Next.JS that replicates the functionality of an Airtable (https://airtable.com/) Bugs Tracker.

Goals for the challenge:

Stipulation was to use both Axios and Airtable's API.

In your javascript application, implement a UI for records in the Bugs table only: 
1. Implement sort and search functionality. 
2. Implement view record functionality. 
3. Implement add record functionality. 
4. Implement edit record functionality. 
5. Implement delete a single record functionality. 



Application uses the following libraries:
- Tanstack Table: https://tanstack.com/table/latest/docs/introduction
- Chakra-UI (with snippets): https://chakra-ui.com/docs/get-started/frameworks/next-app

Decisions:

My initial "for time" considerations:

  - Component libraries to handle the tables and inputs: Tanstack & Chakra UI

  - Selected 7 data columns to pull from Airtable — Bug ID, Description, Affected Components, Priority, Status, Steps to Reproduce, Date
    - The thinking was that these were the most critical for job performance (this is arguable, and I am currently arguing with myself about it)
    - These also gave me the ability to re-use input components and still build multiple components as a demonstration

  - The order by which to implement the CRUD operations — Display, Update, Create, Delete
    - The thinking here is that because these bugs are being pulled from elsewhere (i.e. generated automatically, added as tickets by users), this app would not necessarily need to create bug reports. 
    - The ability to "Close" the bugs is at least a substitute for clearing them (though those of us who like to keep a clean log would also argue this point)

  - I decided to leave Search/Sort for last because, as useful as they are, in a crunch I figured they were the most disposable features

  - Color scheme — initially I wanted something pared down and not necessarily sparse, but once I saw what black and white looked like, I just ran with it


Challenges:

  - For preparation, I had a lot of documentation to read and research to do in the lead up to actually coding the project

  - The last time I spun up a React app was over 3 years ago, and I used create-react app to do it - (I also had very limited exposure to hooks)
    - create-react app being deprecated meant I had to research frameworks and how to begin a new project
    - I specifically looked at frameworks and libraries with robust support, either with thorough documentation or community adoption
      - I decided to go with Next.js as it fit both criteria
    - Tanstack and Chakra were selected over Shadcn and Material as they were the most commonly referenced libraries; they also looked the easiest to use out-of-the-box considering the time crunch

  - The greatest challenge was researching and testing before even coding

  - The coding itself was also definitely a challenge - I've been siloed for so long in my current stack, so it was exciting and nerve-wracking to jump head first back into React development

  - There were a number of instances where Chakra and Tanstack components did not behave or function as expected, and troubleshooting the issue cost time

Successes:

  - Used both API's successfully

  - View: Displaying all the columns I decided to implement

  - Add: Application allows creation of a record and successfully saves it to the table

  - Edit: Every Column field I implemented (with the exception of Datepicker) is editable on demand

  - Format and basic style, readability, and useability


Sacrifices:

I was ultimately unable to complete the following requirements:

  - Delete

  - Search/Sort

  - Did not include some Airtable columns:
    - Severity: I felt that this qualification could be made by looking at the Affected Components and the Priority fields
    - Assigned Developer: I treated this app as if it were a personal dashboard and the developer responsible for the bugs would be the only one to see it
    - Attachments: This was specifically a time consideration
    - Resolution Progress: This can be at least partially derived from the availble sources (Status) and code commits

  - Did not add an input for Date (date picker)

Not listed as requirements, but still sacrifices I made:

  - Form validation, input control, error messages

  - Overall responsiveness (this was not mobile first)

  - Cleaner code, especially on page.js

  - Would have liked to break the "Create Form" code out into its own component

  - ENV variables for Airtable API calls

  - Possible bug - When a new record gets created/saved and the page re-renders, instead of displaying the newly created row, sometimes it duplicates the last row on the table instead.
    - Thoughts: The re-render is happening faster than the API call or faster than Airtable can make the new data available
    - Possible solutions include delaying the fetch or re-setting the records data with the response data from the API call


Lessons Learned:

  - React development is NOT like riding a bike

  - Find libraries with either clearly written docs or libraries that are heavily supported by the development community (newest isn't always best)

  - Plug and play is great until something breaks and you don't know why

  - Time management and plans are also great until you get stuck on a dropdown

  - It's easy to get lost in hooks and state management

  - Hard not to go down every rabbit hole and try to learn it all at once — learn what I need, when I need it, and let the knowledge accumulate over time

**Overall, I had a lot of fun with this project. It allowed me to gauge not only where I am as a developer, but where I was, and where I'd like to be.**




BOILER PLATE

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   a r t i c u l a t e - a i r t a b l e - c h a l l e n g e - a p p 
 
 
