<p align="center"><img src="https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/first_reflight_-_10_ses-10_east_deck.jpg"></p>

<h1 align="center">:rocket: SpaceX GraphQL API</h1>
<h3 align="center">This is a GraphQL wrapper over the <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a>.</h3>

## Docs

> You can read the full documentation in the [SpaceX API Docs](https://github.com/r-spacex/SpaceX-API/tree/master/docs).

|Query|description|params|
|---|---|---|
|capsule|Get information for a specific capsule|`id: String`|
|capsules|Get information for all capsules|   |
|history|Get company history and milestones|   |
|info|Get information on Space Exploration Technologies Corp|   |
|launch|Get information for a specific launch|`id: String`|
|launches|Get information for all past launches| `scope: latest / next / upcoming / all`, `sort: String`, `order: ASC / DESC` |
|launchpad|Get information for a specific launchpad|`id: String`|
|launchpads|Get information for all launchpads|   |
|partCapsule|Get information for specific capsule used during flights|`id: String`|
|partCapsules|Get information for all capsules used during flights|`sort: String`, `order: ASC / DESC`|
|partCore|Get information for specific core used during flights|`id: String`|
|partCores|Get information for all cores used during flights|`sort: String`, `order: ASC / DESC`|
|roadster|Get information and orbital data for Starman Roader|   |
|rocket|Get information for a specific rocket|`id: String`|
|rockets|Get information for rockets|   |
