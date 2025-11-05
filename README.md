# Web Development Project 6 - *Data Insights Dashboard*

Submitted by: **Surya Varun Kolachana**

This web app: **A comprehensive data visualization dashboard that displays project analytics with interactive charts and detailed item views**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique URL link to that item's detail view page**
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

The following **optional** features are implemented:

- [x] The site's customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

The following **additional** features are implemented:

* [x] Responsive design that works on mobile and desktop
* [x] Loading states and error handling for API calls
* [x] Search functionality to filter items in the list
* [x] Dark/light mode toggle
* [x] Progress bars and status indicators
* [x] Budget tracking visualization

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://go.screenpal.com/watch/cTXhVvnFOZW


## Notes

Describe any challenges encountered while building the app.

Building this data dashboard presented several interesting challenges:

1. **React Router Integration**: Setting up dynamic routing for each data item required careful planning of the route structure and ensuring that the sidebar remained consistent across all views.

2. **Data Visualization**: Choosing the right chart types to effectively communicate the story behind the data was challenging. I experimented with several chart libraries before settling on Recharts for its React compatibility and extensive documentation.

3. **State Management**: Managing the state between the dashboard and detail views while maintaining performance required implementing React context and proper prop drilling.

4. **Responsive Charts**: Making the charts responsive across different screen sizes required additional configuration and media queries.

5. **API Data Transformation**: The raw data from the API needed significant transformation to be suitable for visualization, which involved complex JavaScript array methods and data formatting.

## Installation & Setup

1. **Create a new React app:**
```bash
npx create-react-app data-dashboard
cd data-dashboard