const sampleData = [
    {
      "id": "1",
      "title": "GROUP TERM LIFE",
      "rules": [
        {
          "label": "Policyholder can only choose 1 either accelerated or additional for the same product"
        },
        {
          "label": "Policyholder can only choose 1 from Acc-GTI or Acc-GCI or Add-GCI"
        },
        {
          "label": "GAMR can be taken if the policyholder take GAD and GADD"
        }
      ],
      "nodes": [
        {
          "id": "1.2",
          "title": "Total Permanent Disability",
          "nodes": [
            {
              "id": "1.2.1",
              "title": "ACC-GTPD - Accelerated",
              "code": "ACC-GTPD"
            }
          ]
        },
        {
          "id": "1.3",
          "title": "ACC-GTI - Terminal Illness",
          "code": "ACC-GTI"
        },
        {
          "id": "1.7",
          "title": "GAMR - Accidental Medical Reimbursement",
          "code": "GAMR"
        }
      ]
    },
    {
      "id": "3",
      "title": "GROUP MEDICAL",
      "nodes": [
        {
          "id": "3.1",
          "title": "Inpatient",
          "nodes": [
            {
              "id": "3.1.1",
              "title": "Type 1 - Inner Limit per year with surgery schedule",
              "code": "Type 1"
            }
          ]
        },
        {
          "id": "3.2",
          "title": "Maternity",
          "nodes": [
            {
              "id": "3.2.1",
              "title": "Type 1 - Inner Limit per year",
              "code": "Type 1"
            }
          ]
        },
        {
          "id": "3.3",
          "title": "Outpatient",
          "nodes": [
            {
              "id": "3.3.2",
              "title": "Type 2 - Semi As-charged per year",
              "code": "Type 2"
            }
          ]
        },
        {
          "id": "3.5",
          "title": "Optical",
          "nodes": [
            {
              "id": "3.5.2",
              "title": "Type 2 - Semi As-charged per year",
              "code": "Type 2"
            }
          ]
        },
        {
          "id": "3.6",
          "title": "Preventive Care",
          "nodes": [
            {
              "id": "3.6.1",
              "title": "Type 1 - Inner Limit per year",
              "code": "Type 1"
            }
          ]
        }
      ]
    }
  ]

export {sampleData};