/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "publisherSearch"
    },
    {
      "id": "publisherKey"
    },
    {
      "id": "literatureSearch"
    },
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "PUBLISHER",
    "DATASET",
    "COLLECTION",
    "INSTITUTION",
    "LITERATURE",
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px",
    "fontFamily": "Roboto, sans-serif",
    chartColors: [
      "#234459", // dark blue-teal
      "#6DA644", // green
      "#F2EC9B", // pale yellow
      "#E89B3C", // golden orange
      "#D9762A", // burnt orange
      "#D14B3C", // brick red
      "#B33636", // deep red
      "#D3D936", // chartreuse
      "#5C3A82", // plum
      "#7A4F9E", // violet
    ]
  },
  suggest: {
    gadm: { type: 'PARAMS', value: { gadmGid: 'SWE' } }
  },
  openDrawerOnTableRowClick: false,
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "key": "publishingCountry",
          "type": "equals",
          "value": "SE"
        },
        {
          "type": "and",
          "predicates": [
            {
              "key": "country",
              "type": "equals",
              "value": "SE"
            },
            {
              "key": "notIssues",
              "type": "equals",
              "value": "COUNTRY_COORDINATE_MISMATCH"
            }
          ]
        }
      ]
    },
    "highlightedFilters": [
      "occurrenceStatus",
      "taxonKey",
      "year",
      "country",
      "issue",
      "geometry"
    ],
    "excludedFilters": [
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    // "defaultEnabledTableColumns": [
    //   "features",
    //   "institutionKey",
    //   "collectionKey",
    //   "catalogNumber",
    //   "country",
    //   "year",
    //   "recordedBy",
    //   "identifiedBy"
    // ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 62.126,
      "lng": 18.9,
      "zoom": 5.2438486
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    scope: {
      country: "SE",
      active: true
    },
  },
  "institutionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      country: "SE",
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license', 'dwcaExtension'],
    scope: {
      publishingCountry: ['SE']
    },
  },
  "publisherSearch": {
    excludedFilters: ['country'],
    scope: {
      country: "SE",
      active: true
    },
  },
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
          {
              "type": "in",
              "key": "countriesOfResearcher",
              "values": [
                  "SE"
              ]
          },
          {
              "type": "in",
              "key": "countriesOfCoverage",
              "values": [
                  "SE"
              ]
          }
      ]
    }
  }
}
