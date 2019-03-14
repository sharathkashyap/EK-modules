import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

      /**
* content is used to render IContents value on the view
*/
@Input() content: any;
data: any;
@Input() customClass: string;
@Output() clickEvent = new EventEmitter<any>();

constructor() {
  /*this.content = {
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
  };*/
}

ngOnInit() {
  if(this.content != null) {
    console.log(this.content);
    this.data = this.content;
  }
  
}


onAction(data, action) {
  //this.clickEvent.emit({ 'action': action, 'data': data });
}

}
