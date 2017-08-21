import { Injectable } from '@angular/core';

@Injectable()

export class AwardsSearchService {
    visableAwards = [];
    getAwards(){
        return this.visableAwards = AWARDS.slice(0);
    }
    getAward(id:number){
        return AWARDS.slice(0).find(award => award.awardId == id);
    }
}

const AWARDS = [
    {"awardId":1, "awardName":"best award", "AwardDegreeLevel":"under-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":2, "awardName":"best dev", "AwardDegreeLevel":"under-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":3, "awardName":"best best", "AwardDegreeLevel":"under-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":4, "awardName":"best award", "AwardDegreeLevel":"under-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":5, "awardName":"best award", "AwardDegreeLevel":"post-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":6, "awardName":"best award", "AwardDegreeLevel":"post-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":7, "awardName":"best award", "AwardDegreeLevel":"post-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":8, "awardName":"best award", "AwardDegreeLevel":"post-graduate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":9, "awardName":"best award", "AwardDegreeLevel":"doctorate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":10, "awardName":"best award", "AwardDegreeLevel":"doctorate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":11, "awardName":"best award", "AwardDegreeLevel":"doctorate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":12, "awardName":"best award", "AwardDegreeLevel":"doctorate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"},
    {"awardId":13, "awardName":"best award", "AwardDegreeLevel":"certificate","AwardDegree":"BCIS","AwardMajor":"Software","awardDate":"2017","awardBlub":"blurb here"}
]
