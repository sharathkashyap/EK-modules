import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  slideConfig: any;
  @Input() contents: any; 
  @Input() title: any;

  constructor() { 
    this.title = "Featured Content";
    this.contents = [{
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
            "subject": "Mathematics",
            "channel": "in.ekstep",
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
            "organisation": [
              "NTP"
            ],
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar",
                "size": 12590
              }
            },
            "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"83a3d941-3306-429e-aae2-07ca70d744ee\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
            "objectType": "Content",
            "gradeLevel": [
              "Class 4"
            ],
            "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
            "me_totalTimespent": 31.8,
            "collections": [],
            "me_averageTimespentPerSession": 31.8,
            "appId": "staging.diksha.portal",
            "contentEncoding": "gzip",
            "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip",
            "contentType": "Resource",
            "identifier": "do_21264270761184460811673",
            "lastUpdatedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "lastPublishedBy": "7bd5aef5-d825-47fa-96b5-3a3ce3b4020b",
            "prevState": "Review",
            "size": 562094,
            "lastPublishedOn": "2018-11-27T07:22:07.149+0000",
            "IL_FUNC_OBJECT_TYPE": "Content",
            "name": "Mathematics Activity - Class 4",
            "attributions": [
              "DIKSHA"
            ],
            "status": "Live",
            "totalQuestions": 5,
            "me_averageInteractionsPerMin": 0,
            "code": "org.sunbird.aFaNPB",
            "me_totalSessionsCount": 1,
            "description": "Grade 4 Math Activity",
            "medium": "English",
            "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
            "idealScreenSize": "normal",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20052111/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.jpeg",
            "createdOn": "2018-11-27T06:14:29.024+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-377",
                "assertionId": "2c8c6351-d098-4522-937c-38d78e2a129b",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/4d0f1b1dea2ce9ed399f88e5fe8792fa.png",
                "badgeId": "badgeslug-121",
                "badgeClassName": "Best author",
                "createdTS": 1545893035212,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-11-27T07:22:05.791+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:55.345+0000",
            "dialcodeRequired": "No",
            "owner": "DemoCreator Creator",
            "creator": "DemoCreator Creator",
            "createdFor": [
              "ORG_001"
            ],
            "IL_SYS_NODE_TYPE": "DATA_NODE",
            "os": [
              "All"
            ],
            "me_totalInteractions": 0,
            "totalScore": 5,
            "pkgVersion": 2,
            "versionKey": "1543303326455",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
            "lastSubmittedOn": "2018-11-27T07:20:23.559+0000",
            "createdBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
            "compatibilityLevel": 2,
            "IL_UNIQUE_ID": "do_21264270761184460811673",
            "ownedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
            "board": "State (Tamil Nadu)",
            "resourceType": "Test",
            "node_id": 440472
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://www.youtube.com/watch?v=Gv_XBMrPvRw",
            "keywords": [
              "teste"
            ],
            "subject": "Mathematics",
            "channel": "in.ekstep",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125734212713021441362/augustupload_1534841563186_do_2125734212713021441362_1.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125734212713021441362/augustupload_1534841563347_do_2125734212713021441362_1.0_spine.ecar",
                "size": 796876
              }
            },
            "mimeType": "video/x-youtube",
            "objectType": "Content",
            "gradeLevel": [
              "Class 1"
            ],
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
            "collections": [
              "do_2125734829592821761440",
              "do_2125734852975411201443",
              "do_2125735126760488961476",
              "do_2125740295862599681621",
              "do_2125734923752161281451",
              "do_2125735306733240321498",
              "do_2125741683651952641708"
            ],
            "appId": "staging.sunbird.portal",
            "artifactUrl": "https://www.youtube.com/watch?v=Gv_XBMrPvRw",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "lastUpdatedBy": "042fcd21-e152-4dc1-b4f1-d66ceb7bc044",
            "identifier": "do_2125734212713021441362",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "Is suitable for children",
              "No Discrimination or Defamation",
              "Relevant Keywords",
              "Appropriate tags such as Resource Type, Concepts",
              "Appropriate Title, Description",
              "Correct Board, Grade, Subject, Medium",
              "Content plays correctly",
              "Can see the content clearly on Desktop and App",
              "Audio (if any) is clear and easy to understand",
              "No Spelling mistakes in the text",
              "Language is simple to understand"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "042fcd21-e152-4dc1-b4f1-d66ceb7bc044",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "pragma": [
              "external"
            ],
            "prevState": "Review",
            "license": "Standard YouTube License",
            "lastPublishedOn": "2018-08-21T08:52:43.186+0000",
            "size": 796876,
            "name": "AugustUpload",
            "attributions": [
              "test"
            ],
            "status": "Live",
            "code": "bd507277-010e-4d62-adc2-a511e0c77244",
            "description": "this is for testing",
            "medium": "English",
            "streamingUrl": "https://www.youtube.com/watch?v=Gv_XBMrPvRw",
            "idealScreenSize": "normal",
            "createdOn": "2018-08-21T08:51:03.781+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-350",
                "assertionId": "997dd000-13d1-4366-8bcb-4e0feaa9b88f",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/479627652ab185a63530c527d78dd770.png",
                "badgeId": "badgeslug-91",
                "badgeClassName": "Best guide",
                "createdTS": 1535368466528,
                "status": "active"
              }
            ],
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-08-21T08:52:42.853+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-08-27T11:14:26.647+0000",
            "createdFor": [
              "01257210567472742413"
            ],
            "creator": "Nike creator",
            "os": [
              "All"
            ],
            "pkgVersion": 1,
            "versionKey": "1534841562853",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2125734212713021441362/augustupload_1534841563186_do_2125734212713021441362_1.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-08-21T08:51:47.434+0000",
            "createdBy": "687a2185-c75a-470b-9b35-a75927c8a6a5",
            "compatibilityLevel": 4,
            "board": "State (Uttar Pradesh)",
            "resourceType": "Learn",
            "node_id": 416347
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21253030262870016013216-latest",
            "keywords": [
              "quesiton"
            ],
            "subject": "Physical Science",
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_21253030262870016013216/copy-of-assessment_1529578524227_do_21253030262870016013216_1.0.ecar",
            "channel": "in.ekstep",
            "organisation": [
              "Odisha",
              "FM college"
            ],
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_21253030262870016013216/copy-of-assessment_1529578524401_do_21253030262870016013216_1.0_spine.ecar",
                "size": 47257
              }
            },
            "objectType": "Content",
            "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21253030262870016013216/artifact/assets1_800_1528361428_1528361428321.thumb.jpg",
            "gradeLevel": [
              "Class 9"
            ],
            "collections": [
              "do_21253050872067686413",
              "do_212530880802250752151",
              "do_21253035439320268813476",
              "do_21253039762149376013489",
              "do_21253667527286784011885",
              "do_212530867006832640136",
              "do_21253037826115174413483"
            ],
            "appId": "staging.diksha.portal",
            "contentEncoding": "gzip",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T15:26:50.192+0000",
            "contentType": "Resource",
            "lastUpdatedBy": "Ekstep",
            "identifier": "do_21253030262870016013216",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "Ekstep",
            "languageCode": "en",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "prevState": "Review",
            "lastPublishedOn": "2018-06-21T10:55:24.227+0000",
            "size": 188670,
            "name": "Copy of Assessment",
            "topic": [
              "Our Food"
            ],
            "publisher": "EkStep",
            "status": "Live",
            "totalQuestions": 1,
            "code": "org.sunbird.qOUFSH.copy",
            "origin": "do_21253017962995712012452",
            "description": "This is for assement",
            "medium": "Telugu",
            "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21253030262870016013216/artifact/assets1_800_1528361428_1528361428321.jpg",
            "idealScreenSize": "normal",
            "createdOn": "2018-06-21T10:45:57.607+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-377",
                "assertionId": "344421a5-7aa2-4088-b6ad-25f5dfb89b78",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/862f7bca9324bde040f9eef5b0cd97e7.png",
                "badgeId": "badgeslug-121",
                "badgeClassName": "Best author",
                "createdTS": 1545892953335,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-06-21T10:55:24.149+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:42:33.478+0000",
            "dialcodeRequired": "No",
            "createdFor": [
              "01232003237608652844",
              "01231711180382208027"
            ],
            "creator": "V12345 S12",
            "os": [
              "All"
            ],
            "totalScore": 1,
            "pkgVersion": 1,
            "versionKey": "1529665264555",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_21253030262870016013216/copy-of-assessment_1529578524227_do_21253030262870016013216_1.0.ecar",
            "framework": "ap_k-12_13",
            "lastSubmittedOn": "2018-06-21T10:47:36.244+0000",
            "createdBy": "4c4530df-0d4f-42a5-bd91-0366716c8c24",
            "compatibilityLevel": 2,
            "organization": [
              "Consumption Org",
              "345 org"
            ],
            "attribution": [
              "June"
            ],
            "board": "State (Andhra Pradesh)",
            "resourceType": "Test",
            "node_id": 380005
          },
          {
            "ownershipType": [
              "createdFor"
            ],
            "previewUrl": "https://www.youtube.com/watch?v=hq3yfQnllfQ",
            "subject": "Tamil",
            "channel": "in.ekstep",
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_212652249729810432136/you-20182018_1544464275369_do_212652249729810432136_1.0.ecar",
            "organisation": [
              "Sachin 2808"
            ],
            "language": [
              "English"
            ],
            "showNotification": true,
            "mimeType": "video/x-youtube",
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_212652249729810432136/you-20182018_1544464275426_do_212652249729810432136_1.0_spine.ecar",
                "size": 1503
              }
            },
            "objectType": "Content",
            "gradeLevel": [
              "Class 2"
            ],
            "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_212652249729810432136/artifact/download_1540471112504.thumb.png",
            "me_totalTimespent": 44.24,
            "collections": [
              "do_212652568100675584185",
              "do_212652572449439744186",
              "do_212652579900563456188",
              "do_2126526104131338241143",
              "do_2126526136815124481151",
              "do_2126527899503656961390"
            ],
            "me_averageTimespentPerSession": 11.06,
            "appId": "staging.diksha.portal",
            "contentEncoding": "identity",
            "artifactUrl": "https://www.youtube.com/watch?v=hq3yfQnllfQ",
            "contentType": "Resource",
            "identifier": "do_212652249729810432136",
            "lastUpdatedBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
            "pragma": [
              "external"
            ],
            "license": "Standard YouTube License",
            "prevState": "Review",
            "size": 1505,
            "lastPublishedOn": "2018-12-10T17:51:15.369+0000",
            "IL_FUNC_OBJECT_TYPE": "Content",
            "name": "You 20182018",
            "status": "Live",
            "me_averageInteractionsPerMin": 29.84,
            "code": "5035823c-87a6-40a1-aead-cb18bb8c2db4",
            "me_totalSessionsCount": 4,
            "medium": "Telugu",
            "streamingUrl": "https://www.youtube.com/watch?v=hq3yfQnllfQ",
            "idealScreenSize": "normal",
            "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_212619539352354816112/artifact/download_1540471112504.png",
            "createdOn": "2018-12-10T17:47:58.345+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-370",
                "assertionId": "5cbe7bf7-86be-44e4-8976-2f4efbc83afc",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/358733c592107fe351f6f2a89e05c19a.png",
                "badgeId": "badgeslug-114",
                "badgeClassName": "Best author",
                "createdTS": 1544513489714,
                "status": "active"
              }
            ],
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-12-10T17:51:15.256+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-11T07:31:29.763+0000",
            "dialcodeRequired": "No",
            "owner": "Sachin 2808",
            "creator": "Som r",
            "createdFor": [
              "0125683555607347207"
            ],
            "IL_SYS_NODE_TYPE": "DATA_NODE",
            "os": [
              "All"
            ],
            "me_totalInteractions": 22,
            "pkgVersion": 1,
            "versionKey": "1544464275256",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_212652249729810432136/you-20182018_1544464275369_do_212652249729810432136_1.0.ecar",
            "lastSubmittedOn": "2018-12-10T17:48:41.115+0000",
            "createdBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
            "compatibilityLevel": 4,
            "IL_UNIQUE_ID": "do_212652249729810432136",
            "ownedBy": "0125683555607347207",
            "board": "State (Andhra Pradesh)",
            "resourceType": "Learn",
            "node_id": 0
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21253030262870016013216-latest",
            "keywords": [
              "quesiton"
            ],
            "subject": "Physical Science",
            "channel": "in.ekstep",
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_21253030262870016013216/copy-of-assessment_1529578524227_do_21253030262870016013216_1.0.ecar",
            "organisation": [
              "Odisha",
              "FM college"
            ],
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_21253030262870016013216/copy-of-assessment_1529578524401_do_21253030262870016013216_1.0_spine.ecar",
                "size": 47257
              }
            },
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "objectType": "Content",
            "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21253030262870016013216/artifact/assets1_800_1528361428_1528361428321.thumb.jpg",
            "gradeLevel": [
              "Class 9"
            ],
            "me_totalTimespent": 479.28,
            "collections": [
              "do_212530880802250752151",
              "do_21253667527286784011885",
              "do_212530867006832640136",
              "do_21253035439320268813476",
              "do_21253039762149376013489",
              "do_21253037826115174413483",
              "do_21253050872067686413",
              "do_2126528040053227521418"
            ],
            "me_averageTimespentPerSession": 95.86,
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21253030262870016013216/artifact/1529578154218_do_21253030262870016013216.zip",
            "contentEncoding": "gzip",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T15:26:50.192+0000",
            "contentType": "Resource",
            "lastUpdatedBy": "Ekstep",
            "identifier": "do_21253030262870016013216",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "languageCode": "en",
            "lastPublishedBy": "Ekstep",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "prevState": "Review",
            "size": 188670,
            "lastPublishedOn": "2018-06-21T10:55:24.227+0000",
            "name": "Copy of Assessment",
            "topic": [
              "Our Food"
            ],
            "publisher": "EkStep",
            "status": "Live",
            "totalQuestions": 1,
            "me_averageInteractionsPerMin": 1,
            "code": "org.sunbird.qOUFSH.copy",
            "me_totalSessionsCount": 5,
            "origin": "do_21253017962995712012452",
            "description": "This is for assement",
            "medium": "Telugu",
            "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21253030262870016013216-latest",
            "idealScreenSize": "normal",
            "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21253030262870016013216/artifact/assets1_800_1528361428_1528361428321.jpg",
            "createdOn": "2018-06-21T10:45:57.607+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-377",
                "assertionId": "344421a5-7aa2-4088-b6ad-25f5dfb89b78",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/862f7bca9324bde040f9eef5b0cd97e7.png",
                "badgeId": "badgeslug-121",
                "badgeClassName": "Best author",
                "createdTS": 1545892953335,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-06-21T10:55:24.149+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:42:33.405+0000",
            "dialcodeRequired": "No",
            "createdFor": [
              "01232003237608652844",
              "01231711180382208027"
            ],
            "creator": "V12345 S12",
            "os": [
              "All"
            ],
            "me_totalInteractions": 8,
            "totalScore": 1,
            "pkgVersion": 1,
            "versionKey": "1529578524149",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_21253030262870016013216/copy-of-assessment_1529578524227_do_21253030262870016013216_1.0.ecar",
            "framework": "ap_k-12_13",
            "lastSubmittedOn": "2018-06-21T10:47:36.244+0000",
            "createdBy": "4c4530df-0d4f-42a5-bd91-0366716c8c24",
            "compatibilityLevel": 2,
            "organization": [
              "Consumption Org",
              "345 org"
            ],
            "attribution": [
              "June"
            ],
            "board": "State (Andhra Pradesh)",
            "resourceType": "Test",
            "node_id": 379426
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "subject": "Physical Science",
            "channel": "in.ekstep",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
            "organisation": [
              "1.10 Org"
            ],
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482107_do_21259106171407564812108_1.0_spine.ecar",
                "size": 22783
              }
            },
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "objectType": "Content",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
            "gradeLevel": [
              "Class 9"
            ],
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/1536996481813_do_21259106171407564812108.zip",
            "contentEncoding": "gzip",
            "contentType": "Resource",
            "lastUpdatedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
            "identifier": "do_21259106171407564812108",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "No Discrimination or Defamation",
              "Is suitable for children",
              "Relevant Keywords",
              "Appropriate tags such as Resource Type, Concepts",
              "Correct Board, Grade, Subject, Medium",
              "Appropriate Title, Description",
              "Language is simple to understand",
              "No Spelling mistakes in the text",
              "Audio (if any) is clear and easy to understand",
              "Can see the content clearly on Desktop and App",
              "Content plays correctly"
            ],
            "visibility": "Default",
            "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "prevState": "Review",
            "size": 367829,
            "lastPublishedOn": "2018-09-15T07:28:02.030+0000",
            "name": "ContentSep",
            "status": "Live",
            "totalQuestions": 1,
            "code": "org.sunbird.ooPeyD",
            "description": "Untitled Collection",
            "medium": "Telugu",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2018-09-15T07:00:38.143+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-376",
                "assertionId": "62cc4979-04f9-4da1-862e-ce4c49458ba7",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/343f9a93e8c2a82ffe36e9ecfbf363f6.png",
                "badgeId": "badgeslug-120",
                "badgeClassName": "STATE TEXTBOOK5",
                "createdTS": 1545133359941,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-09-15T07:28:00.564+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-18T11:42:40.059+0000",
            "dialcodeRequired": "No",
            "createdFor": [
              "0125903113586933768"
            ],
            "creator": "1.10Creator User",
            "os": [
              "All"
            ],
            "totalScore": 1,
            "pkgVersion": 1,
            "versionKey": "1536996480564",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
            "framework": "ap_k-12_13",
            "lastSubmittedOn": "2018-09-15T07:01:55.763+0000",
            "createdBy": "644da49c-7bef-49d6-8e24-e741d148d652",
            "compatibilityLevel": 2,
            "board": "State (Andhra Pradesh)",
            "resourceType": "Teach",
            "node_id": 428793
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
            "keywords": [
              "ecwewcewce"
            ],
            "subject": "English",
            "channel": "in.ekstep",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
            "organisation": [
              "Consumption Org",
              "ORG25"
            ],
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625299_do_21252884005676646411974_1.0_spine.ecar",
                "size": 51673
              }
            },
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "objectType": "Content",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
            "gradeLevel": [
              "Class 1"
            ],
            "collections": [
              "do_21252944504394547212198"
            ],
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/1529399624900_do_21252884005676646411974.zip",
            "contentEncoding": "gzip",
            "contentType": "Resource",
            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "identifier": "do_21252884005676646411974",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "No Discrimination or Defamation",
              "Is suitable for children",
              "Relevant Keywords",
              "Appropriate tags such as Resource Type, Concepts",
              "Correct Board, Grade, Subject, Medium",
              "Appropriate Title, Description",
              "Content plays correctly",
              "Can see the content clearly on Desktop and App",
              "Audio (if any) is clear and easy to understand",
              "No Spelling mistakes in the text",
              "Language is simple to understand"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "prevState": "Review",
            "size": 153803,
            "lastPublishedOn": "2018-06-19T09:13:45.145+0000",
            "concepts": [
              "SC6",
              "C26",
              "SC5"
            ],
            "name": "Rajasthan",
            "status": "Live",
            "totalQuestions": 0,
            "code": "org.sunbird.5gt9FD",
            "description": "Untitled Collection",
            "medium": "English",
            "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212450905413713920137/artifact/3_1519885914935.jpg",
            "idealScreenSize": "normal",
            "createdOn": "2018-06-19T09:10:20.991+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-377",
                "assertionId": "f9554ba0-5958-4a97-b20a-d0d7a04360b1",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3549b0881ddf5025736e7baf5b027dcf.png",
                "badgeId": "badgeslug-121",
                "badgeClassName": "Best author",
                "createdTS": 1545893013408,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-06-19T09:13:44.465+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:33.466+0000",
            "dialcodeRequired": "No",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "Ntp creator Uswr",
            "os": [
              "All"
            ],
            "totalScore": 0,
            "pkgVersion": 1,
            "versionKey": "1529399624465",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-06-19T09:12:39.017+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 2,
            "board": "State (Rajasthan)",
            "resourceType": "Test",
            "node_id": 378177
          },
          {
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
            "subject": "History and Civics",
            "channel": "in.ekstep",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769733201_do_2125005681201643521507_4.0_spine.ecar",
                "size": 45773
              }
            },
            "mimeType": "application/pdf",
            "objectType": "Content",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
            "gradeLevel": [
              "Grade 6"
            ],
            "collections": [
              "do_21252176248861491213236",
              "do_2125310927864381441577",
              "do_21250340016679321616577",
              "do_21251468409401344012195",
              "do_2125430226266767361659",
              "do_21252804279848140811599",
              "do_2125310927864381441578",
              "do_212518123106598912146655",
              "do_21257828012981452811689",
              "do_212516115958833152146551"
            ],
            "appId": "ekstep_portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "lastUpdatedBy": "creator12345 Test",
            "identifier": "do_2125005681201643521507",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "No Discrimination or Defamation",
              "Is suitable for children",
              "Appropriate Title, Description",
              "Correct Board, Grade, Subject, Medium",
              "Appropriate tags such as Resource Type, Concepts",
              "Relevant Keywords",
              "Content plays correctly",
              "Can see the content clearly on Desktop and App",
              "Audio (if any) is clear and easy to understand",
              "No Spelling mistakes in the text",
              "Language is simple to understand"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "pragma": [
              "external"
            ],
            "prevState": "Live",
            "lastPublishedOn": "2018-05-31T12:28:52.335+0000",
            "size": 8966834,
            "concepts": [
              "BIO40000",
              "BIO50000"
            ],
            "name": "123were",
            "status": "Live",
            "code": "ddd8e812-8126-4d95-b4e1-a92988eda68c",
            "lastFlaggedOn": "2018-07-05T06:38:21.173+0000",
            "medium": "English",
            "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124734547707576321269/artifact/111-600x375_1522638521957.jpg",
            "idealScreenSize": "normal",
            "flaggedBy": [
              "creator12345 Test"
            ],
            "createdOn": "2018-05-10T10:30:56.855+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-57",
                "assertionId": "5a182f4d-43b1-43c7-a21b-63ce6c24b570",
                "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/badf0408727b0c90556b5de31829164e.png",
                "badgeId": "badgeslug-81",
                "badgeClassName": "Official",
                "createdTS": 1533710533029,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-07-05T06:39:20.400+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-08-08T06:42:13.102+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "Mentor Juthika User",
            "os": [
              "All"
            ],
            "pkgVersion": 4,
            "versionKey": "1530772760400",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
            "framework": "FWATMPT1",
            "lastSubmittedOn": "2018-05-10T10:31:54.877+0000",
            "createdBy": "d882967f-b3e1-456b-b984-d800470837ab",
            "compatibilityLevel": 4,
            "board": "MSCERT",
            "resourceType": "Practice",
            "node_id": 149315
          },
          {
            "ownershipType": [
              "createdFor"
            ],
            "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
            "subject": "English",
            "channel": "in.ekstep",
            "questions": [
              "do_21266327656724070415486"
            ],
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
            "organisation": [
              "Sachin 2808"
            ],
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810352220_do_21266324379998617614877_1.0_spine.ecar",
                "size": 29291
              }
            },
            "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":7,\"currentStage\":\"bb41b09e-151d-4194-aa6e-54132bd73ee3\",\"selectedPluginObject\":\"65131bc5-6092-4116-b648-231c8a1846ad\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
            "objectType": "Content",
            "gradeLevel": [
              "Class 5"
            ],
            "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
            "collections": [
              "do_21266328015857254415496",
              "do_21266330591811993615858"
            ],
            "appId": "staging.diksha.portal",
            "contentEncoding": "gzip",
            "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/1545810351578_do_21266324379998617614877.zip",
            "lockKey": "cbde56e1-5337-41bf-81c9-f155a29ece3e",
            "contentType": "Resource",
            "identifier": "do_21266324379998617614877",
            "lastUpdatedBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
            "audience": [
              "Instructor"
            ],
            "visibility": "Default",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
            "pragma": [
              "external"
            ],
            "prevState": "Review",
            "size": 1725857,
            "lastPublishedOn": "2018-12-26T07:45:51.946+0000",
            "IL_FUNC_OBJECT_TYPE": "Content",
            "name": "R05_Test",
            "status": "Live",
            "totalQuestions": 1,
            "code": "org.sunbird.rLVEAi",
            "description": "ncieioneio",
            "medium": "English",
            "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
            "idealScreenSize": "normal",
            "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266186999677747214484/artifact/icon_1545638427515.png",
            "createdOn": "2018-12-26T06:35:27.927+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-377",
                "assertionId": "a0f07d96-8a35-4f4e-a233-ee0a09c8fd5c",
                "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/27041728dd75b0b7c8e7e61806e9eccd.png",
                "badgeId": "badgeslug-121",
                "badgeClassName": "Best author",
                "createdTS": 1545893080571,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-12-26T07:45:48.738+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:44:40.639+0000",
            "dialcodeRequired": "No",
            "owner": "Sachin 2808",
            "creator": "Som r",
            "createdFor": [
              "0125683555607347207"
            ],
            "IL_SYS_NODE_TYPE": "DATA_NODE",
            "os": [
              "All"
            ],
            "totalScore": 4,
            "pkgVersion": 1,
            "versionKey": "1545810348738",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
            "lastSubmittedOn": "2018-12-26T07:45:07.000+0000",
            "createdBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
            "compatibilityLevel": 4,
            "IL_UNIQUE_ID": "do_21266324379998617614877",
            "ownedBy": "0125683555607347207",
            "board": "CBSE",
            "resourceType": "Test",
            "node_id": 446923
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124857068339691521323-latest",
            "subject": "Environmental Studies",
            "channel": "in.ekstep",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124857068339691521323/oddiaa_1538553982745_do_2124857068339691521323_8.0.ecar",
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124857068339691521323/oddiaa_1538553982809_do_2124857068339691521323_8.0_spine.ecar",
                "size": 25802
              }
            },
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "objectType": "Content",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124857068339691521323/artifact/117-600x375_1518712040248.thumb.jpg",
            "gradeLevel": [
              "Grade 2"
            ],
            "collections": [
              "do_2125535820453478401172",
              "do_21253596865957068811749",
              "do_21253521861366579211508",
              "do_21248578691252224011638",
              "do_212498315371487232171",
              "do_21253509032164556811380",
              "do_2124905316690001921386",
              "do_2124906661492244481495",
              "do_21253449019609907211294",
              "do_21253437841749606411222",
              "do_212516033132896256146238",
              "do_2125323012169809921656",
              "do_21253605681446092811799",
              "do_21252954242949939212287",
              "do_21248578790608896011640",
              "do_21253649700082483211834",
              "do_2124991272868904961731",
              "do_21249127809296793613357",
              "do_21253592610661990411694",
              "do_21253590710253158411676",
              "do_21253601369200230411782",
              "do_2125317468094709761644",
              "do_212486279598129152116706",
              "do_21253518115657318411490",
              "do_2125005757652828161516",
              "do_212486375130628096120924",
              "do_2124906969979944961553",
              "do_21253597378512486411759",
              "do_2124906964994457601551",
              "do_21249554619957248011328",
              "do_2124891749806653441127",
              "do_212486265428017152115929",
              "do_2125331371243028481854",
              "do_21250122531345203216210",
              "do_2124983869690265601194",
              "do_2124906960758865921549",
              "do_21253449125017190411295",
              "do_2124897695911690241208",
              "do_2124906960758865921548",
              "do_2125329858612510721735",
              "do_21252943743941836812190",
              "do_212540239250284544116",
              "do_2125331464760442881884",
              "do_212486266718183424116686",
              "do_2125329942893199361747",
              "do_21250127453403545616245",
              "do_21253591121651302411681",
              "do_2125145976945541121838",
              "do_21253589948448768011666",
              "do_2124906610716098561470",
              "do_21253457926098944011350",
              "do_2125331409601413121872",
              "do_2125239068512337921238",
              "do_2125535869114286081174",
              "do_2125450532862033921357",
              "do_21253590065055334411669",
              "do_212488421768126464132473",
              "do_212488469945802752132480",
              "do_21245895215841280019",
              "do_21250129019109376016256",
              "do_212489116979372032170",
              "do_21248578989371392011644",
              "do_21249131727817932813379",
              "do_2125322853157437441652",
              "do_21253509032163737611379",
              "do_2125329878767206401736",
              "do_21248583455919308812601",
              "do_21253509541222809611385",
              "do_21252592188544614411162",
              "do_212608901045985280167",
              "do_2124906960758865921550",
              "do_212486268423749632116689",
              "do_2124906955718819841541",
              "do_212488469945802752132479",
              "do_2124906955718901761544",
              "do_21253438509975142411229",
              "do_21252096249892044812718",
              "do_2124906955718901761545",
              "do_2124906955718901761546",
              "do_21255084121743360012374",
              "do_2125329983471124481756",
              "do_212498313474359296165",
              "do_212518349348913152150839",
              "do_212486440648482816123795",
              "do_21249348196743577613817",
              "do_21249617917580083211486",
              "do_2124000444393472001614",
              "do_21253591121649664011680",
              "do_2125310927864381441578",
              "do_2125310183699087361486",
              "do_21253594794789273611716",
              "do_21253448840795750411292",
              "do_21248578542201241611634",
              "do_2125323634421678081665",
              "do_21248585324421939217296",
              "do_21250115082403020815502",
              "do_21252806281438003211624",
              "do_2125322948705320961654",
              "do_21248584565287321614109",
              "do_2125323069670359041658",
              "do_2125655840682557441147",
              "do_2125005270073589761468",
              "do_21253589629111500811661",
              "do_21253450228806451211297",
              "do_21253513032287846411420",
              "do_2125323764492697601667",
              "do_2125587032263720961245",
              "do_2125322657518796801650",
              "do_21248578638789017611637",
              "do_21253584150299443211627",
              "do_2125536071980892161193",
              "do_2125400795586641921699",
              "do_2125330169088819201775",
              "do_2125011213275545601690",
              "do_21252955567285043212292",
              "do_2124984172914196481225",
              "do_2125238195723878401113",
              "do_2125630268148121601664",
              "do_21249628561707008011555",
              "do_212498315936817152176",
              "do_2124990085190287361549"
            ],
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124857068339691521323/artifact/1524134335305_do_2124857068339691521323.zip",
            "contentEncoding": "gzip",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:23.087+0000",
            "contentType": "Resource",
            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "identifier": "do_2124857068339691521323",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "ae82a4be-2487-404f-bcac-61b28ad56482",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "languageCode": "en",
            "graph_id": "domain",
            "nodeType": "DATA_NODE",
            "prevState": "Live",
            "lastPublishedOn": "2018-10-03T08:06:22.744+0000",
            "size": 33265,
            "concepts": [
              "LO37"
            ],
            "name": "(ଓଡ଼ିଆ)",
            "status": "Live",
            "code": "org.sunbird.sw1AWv",
            "medium": "English",
            "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124857068339691521323-latest",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21244128902415974411634/artifact/117-600x375_1518712040248.jpg",
            "idealScreenSize": "normal",
            "createdOn": "2018-04-19T10:35:35.006+0000",
            "badgeAssertions": [
              {
                "issuerId": "issuerslug-57",
                "assertionId": "42d0ead2-4573-4df9-943f-1ed767ba1b0f",
                "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/ed7969b53b74fb3ed55628f3b0c9ec88.png",
                "badgeId": "badgeslug-80",
                "badgeClassName": "Official",
                "createdTS": 1533709650037,
                "status": "active"
              },
              {
                "issuerId": "issuerslug-57",
                "assertionId": "546b3c56-4b16-4969-90be-1e12a81a0af8",
                "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/14dc0e300f90e5ad23ef8a270c76cac5.png",
                "badgeId": "badgeslug-81",
                "badgeClassName": "Official",
                "createdTS": 1533709654387,
                "status": "active"
              }
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-10-03T08:06:14.731+0000",
            "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T03:45:32.459+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "Microsoft User",
            "os": [
              "All"
            ],
            "pkgVersion": 8,
            "versionKey": "1527769580717",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2124857068339691521323/oddiaa_1538553982745_do_2124857068339691521323_8.0.ecar",
            "framework": "FWATMPT1",
            "lastSubmittedOn": "2018-04-19T10:38:12.992+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 2,
            "board": "MSCERT",
            "resourceType": "Read",
            "node_id": 104285
          }
        ];
    
  }

  ngOnInit() {
    this.slideConfig = {
      'slidesToShow': 4,
      'slidesToScroll': 4,
      'responsive': [
        {
          'breakpoint': 2800,
          'settings': {
            'slidesToShow': 6,
            'slidesToScroll': 6
          }
        },
        {
          'breakpoint': 2200,
          'settings': {
            'slidesToShow': 5,
            'slidesToScroll': 5
          }
        },
        {
          'breakpoint': 2000,
          'settings': {
            'slidesToShow': 4,
            'slidesToScroll': 4
          }
        },
        {
          'breakpoint': 1600,
          'settings': {
            'slidesToShow': 3.5,
            'slidesToScroll': 3
          }
        },
        {
          'breakpoint': 1200,
          'settings': {
            'slidesToShow': 3,
            'slidesToScroll': 3
          }
        },
        {
          'breakpoint': 900,
          'settings': {
            'slidesToShow': 2.5,
            'slidesToScroll': 2
          }
        },
        {
          'breakpoint': 750,
          'settings': {
            'slidesToShow': 2,
            'slidesToScroll': 2
          }
        },
        {
          'breakpoint': 660,
          'settings': {
            'slidesToShow': 1.75,
            'slidesToScroll': 1
          }
        },
        {
          'breakpoint': 530,
          'settings': {
            'slidesToShow': 1.25,
            'slidesToScroll': 1
          }
        },
        {
          'breakpoint': 450,
          'settings': {
            'slidesToShow': 1,
            'slidesToScroll': 1
          }
        }
      ],
      infinite: false,
      rtl: false
    };
  }
  public inviewChange(contentList, event) {
  }
  public checkSlide(event) {
  }
  public playContent(event) {
  }
  public navigateToViewAll(event) {
  }

}
