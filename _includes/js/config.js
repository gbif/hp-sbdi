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
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
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
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "occurrenceStatus",
          "values": [
            "PRESENT"
          ]
        },
        {
          "type": "in",
          "key": "country",
          "values": [
            "SE"
          ]
        },
        {
          "type": "not",
          "predicate": {
            "type": "in",
            "key": "issue",
            "values": [
              "COUNTRY_COORDINATE_MISMATCH"
            ]
          }
        }
      ]
    },
    // "highlightedFilters": [
    //   "taxonKey",
    //   "verbatimScientificName",
    //   "institutionKey",
    //   "collectionKey",
    //   "catalogNumber",
    //   "recordedBy",
    //   "identifiedBy"
    // ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "country",
      "institutionCode",
      "collectionCode",
      "datasetId",
      "datasetName",
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
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      publishingCountry: ['SE']
    },
  },
}
