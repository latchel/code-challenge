'use strict';


myApp.controller('UsersController',function($scope, RESTService){

    $scope.people = [{
        "id": 0,
        "age": 24,
        "name": "Mathis Hurst",
        "birthdate": "2004-11-17T00:04:56 -01:00"
    }, {
        "id": 1,
        "age": 38,
        "name": "Gallegos Ryan",
        "birthdate": "2001-08-06T11:04:54 -02:00"
    }, {
        "id": 2,
        "age": 27,
        "name": "Jodi Valencia",
        "birthdate": "2012-10-16T12:15:19 -02:00"
    }, {
        "id": 3,
        "age": 28,
        "name": "Jenna Anderson",
        "birthdate": "1990-05-06T01:57:40 -02:00"
    }, {
        "id": 4,
        "age": 28,
        "name": "Horne Clark",
        "birthdate": "1991-11-19T19:23:53 -01:00"
    }, {
        "id": 5,
        "age": 21,
        "name": "Briggs Walters",
        "birthdate": "1990-01-12T08:16:45 -01:00"
    }, {
        "id": 6,
        "age": 27,
        "name": "Rena Higgins",
        "birthdate": "2006-10-10T17:10:05 -02:00"
    }, {
        "id": 7,
        "age": 32,
        "name": "Adrian Marquez",
        "birthdate": "1993-04-15T04:55:00 -02:00"
    }, {
        "id": 8,
        "age": 25,
        "name": "Alberta Ellison",
        "birthdate": "2010-07-24T12:22:32 -02:00"
    }, {
        "id": 9,
        "age": 20,
        "name": "Mcleod Stark",
        "birthdate": "1999-11-26T06:31:55 -01:00"
    }, {
        "id": 10,
        "age": 22,
        "name": "Neal Patrick",
        "birthdate": "2009-11-19T04:09:01 -01:00"
    }, {
        "id": 11,
        "age": 36,
        "name": "Williamson Roman",
        "birthdate": "2008-09-11T07:58:56 -02:00"
    }, {
        "id": 12,
        "age": 36,
        "name": "Fry Baxter",
        "birthdate": "2006-03-26T06:34:45 -02:00"
    }, {
        "id": 13,
        "age": 27,
        "name": "Florence Fuentes",
        "birthdate": "1991-11-05T14:21:19 -01:00"
    }, {
        "id": 14,
        "age": 32,
        "name": "Claudine Nunez",
        "birthdate": "2010-04-07T08:08:06 -02:00"
    }, {
        "id": 15,
        "age": 35,
        "name": "Sylvia Lindsay",
        "birthdate": "1992-07-28T21:54:32 -02:00"
    }, {
        "id": 16,
        "age": 36,
        "name": "Rosalie Wilkins",
        "birthdate": "1994-05-07T06:35:55 -02:00"
    }, {
        "id": 17,
        "age": 31,
        "name": "Dina Carpenter",
        "birthdate": "2013-12-05T21:29:41 -01:00"
    }, {
        "id": 18,
        "age": 38,
        "name": "Roxanne Cardenas",
        "birthdate": "2007-05-04T03:52:48 -02:00"
    }, {
        "id": 19,
        "age": 29,
        "name": "Sasha Everett",
        "birthdate": "2006-08-03T20:29:32 -02:00"
    }, {
        "id": 20,
        "age": 27,
        "name": "Chandler Crawford",
        "birthdate": "2009-02-24T18:25:31 -01:00"
    }, {
        "id": 21,
        "age": 32,
        "name": "Flora Boyle",
        "birthdate": "1995-09-03T23:04:36 -02:00"
    }, {
        "id": 22,
        "age": 37,
        "name": "Terrie Moran",
        "birthdate": "1989-09-25T05:07:00 -02:00"
    }, {
        "id": 23,
        "age": 30,
        "name": "Mueller Hewitt",
        "birthdate": "2007-07-15T22:25:24 -02:00"
    }, {
        "id": 24,
        "age": 37,
        "name": "Neva Mcfadden",
        "birthdate": "1997-04-22T17:07:56 -02:00"
    }, {
        "id": 25,
        "age": 20,
        "name": "Oconnor Lang",
        "birthdate": "1999-10-18T02:26:35 -02:00"
    }, {
        "id": 26,
        "age": 32,
        "name": "Lucille Mcguire",
        "birthdate": "2012-04-19T09:10:43 -02:00"
    }, {
        "id": 27,
        "age": 38,
        "name": "Nadia Beach",
        "birthdate": "2007-08-02T15:59:16 -02:00"
    }, {
        "id": 28,
        "age": 24,
        "name": "George Mercer",
        "birthdate": "2005-07-21T03:44:46 -02:00"
    }, {
        "id": 29,
        "age": 28,
        "name": "Reid Spears",
        "birthdate": "1996-10-07T19:29:49 -02:00"
    }, {
        "id": 30,
        "age": 25,
        "name": "Allen Woods",
        "birthdate": "2002-03-21T12:42:21 -01:00"
    }, {
        "id": 31,
        "age": 28,
        "name": "Jeannette Alford",
        "birthdate": "1993-01-11T21:15:10 -01:00"
    }, {
        "id": 32,
        "age": 35,
        "name": "Mia Pittman",
        "birthdate": "1990-08-05T16:59:03 -02:00"
    }, {
        "id": 33,
        "age": 39,
        "name": "Amanda Holder",
        "birthdate": "1989-11-02T04:42:42 -01:00"
    }, {
        "id": 34,
        "age": 25,
        "name": "Nelson Jimenez",
        "birthdate": "1994-10-18T17:33:06 -02:00"
    }, {
        "id": 35,
        "age": 35,
        "name": "Griffith Soto",
        "birthdate": "2000-02-10T22:29:47 -01:00"
    }, {
        "id": 36,
        "age": 39,
        "name": "Forbes Fernandez",
        "birthdate": "2003-09-17T06:09:03 -02:00"
    }, {
        "id": 37,
        "age": 24,
        "name": "Deana Ross",
        "birthdate": "1996-06-15T20:53:02 -02:00"
    }, {
        "id": 38,
        "age": 27,
        "name": "Lawrence Kane",
        "birthdate": "2005-09-21T20:14:37 -02:00"
    }, {
        "id": 39,
        "age": 31,
        "name": "Lillie Velez",
        "birthdate": "2006-03-19T07:29:01 -01:00"
    }, {
        "id": 40,
        "age": 33,
        "name": "Ester Winters",
        "birthdate": "2004-07-23T03:42:29 -02:00"
    }, {
        "id": 41,
        "age": 35,
        "name": "Dalton Casey",
        "birthdate": "2005-05-19T15:38:52 -02:00"
    }, {
        "id": 42,
        "age": 39,
        "name": "Valenzuela Bass",
        "birthdate": "2014-02-15T08:58:13 -01:00"
    }, {
        "id": 43,
        "age": 24,
        "name": "Middleton Vinson",
        "birthdate": "2013-11-08T14:10:54 -01:00"
    }, {
        "id": 44,
        "age": 22,
        "name": "Rochelle Wilson",
        "birthdate": "1993-05-22T02:01:20 -02:00"
    }, {
        "id": 45,
        "age": 40,
        "name": "Mabel Mendoza",
        "birthdate": "1990-09-18T20:13:21 -02:00"
    }, {
        "id": 46,
        "age": 29,
        "name": "April Becker",
        "birthdate": "2004-07-12T09:52:10 -02:00"
    }, {
        "id": 47,
        "age": 40,
        "name": "Ross Ruiz",
        "birthdate": "2001-11-04T23:53:48 -01:00"
    }, {
        "id": 48,
        "age": 25,
        "name": "Turner Chan",
        "birthdate": "2012-03-11T17:03:04 -01:00"
    }, {
        "id": 49,
        "age": 30,
        "name": "Liliana Alvarado",
        "birthdate": "2001-06-18T22:53:49 -02:00"
    }, {
        "id": 50,
        "age": 38,
        "name": "Beverley Bailey",
        "birthdate": "2014-02-02T11:41:59 -01:00"
    }, {
        "id": 51,
        "age": 30,
        "name": "Wendy Conway",
        "birthdate": "2000-08-09T21:22:47 -02:00"
    }, {
        "id": 52,
        "age": 28,
        "name": "Alejandra Dixon",
        "birthdate": "2002-07-15T22:57:49 -02:00"
    }, {
        "id": 53,
        "age": 34,
        "name": "Alvarado Little",
        "birthdate": "1990-08-25T00:59:27 -02:00"
    }, {
        "id": 54,
        "age": 28,
        "name": "Gordon Bird",
        "birthdate": "2000-11-12T22:56:35 -01:00"
    }, {
        "id": 55,
        "age": 33,
        "name": "Francine Frost",
        "birthdate": "1994-04-04T02:51:37 -02:00"
    }, {
        "id": 56,
        "age": 40,
        "name": "Stafford Atkinson",
        "birthdate": "1988-02-06T13:27:58 -01:00"
    }, {
        "id": 57,
        "age": 26,
        "name": "Tisha Reeves",
        "birthdate": "1990-06-26T12:56:19 -02:00"
    }, {
        "id": 58,
        "age": 39,
        "name": "Beryl Allison",
        "birthdate": "2013-02-03T14:16:43 -01:00"
    }, {
        "id": 59,
        "age": 33,
        "name": "Noelle Hanson",
        "birthdate": "1999-07-28T12:56:10 -02:00"
    }, {
        "id": 60,
        "age": 32,
        "name": "Ashlee Mercado",
        "birthdate": "1997-11-11T06:51:29 -01:00"
    }, {
        "id": 61,
        "age": 22,
        "name": "Wheeler Farmer",
        "birthdate": "1991-07-09T05:41:49 -02:00"
    }, {
        "id": 62,
        "age": 24,
        "name": "Joann Hartman",
        "birthdate": "2003-09-09T21:54:19 -02:00"
    }, {
        "id": 63,
        "age": 34,
        "name": "Antonia Albert",
        "birthdate": "2005-09-11T08:26:36 -02:00"
    }, {
        "id": 64,
        "age": 34,
        "name": "Alison Hatfield",
        "birthdate": "1993-06-29T11:52:05 -02:00"
    }, {
        "id": 65,
        "age": 37,
        "name": "Hallie Sharpe",
        "birthdate": "2005-12-21T19:07:10 -01:00"
    }, {
        "id": 66,
        "age": 39,
        "name": "Debra Chaney",
        "birthdate": "1991-06-06T15:04:50 -02:00"
    }, {
        "id": 67,
        "age": 28,
        "name": "Reed Herring",
        "birthdate": "1992-10-09T11:45:49 -02:00"
    }, {
        "id": 68,
        "age": 25,
        "name": "Burgess Gregory",
        "birthdate": "1992-08-10T23:17:44 -02:00"
    }, {
        "id": 69,
        "age": 27,
        "name": "Peterson Mills",
        "birthdate": "2003-08-28T05:33:36 -02:00"
    }, {
        "id": 70,
        "age": 26,
        "name": "Marguerite Sanchez",
        "birthdate": "1989-06-08T05:12:53 -02:00"
    }, {
        "id": 71,
        "age": 40,
        "name": "Mendoza Snider",
        "birthdate": "2010-07-18T05:21:00 -02:00"
    }, {
        "id": 72,
        "age": 32,
        "name": "Kirk Blackwell",
        "birthdate": "2009-01-03T18:20:36 -01:00"
    }, {
        "id": 73,
        "age": 28,
        "name": "Terri Ratliff",
        "birthdate": "2000-07-18T11:11:55 -02:00"
    }, {
        "id": 74,
        "age": 32,
        "name": "Therese Jordan",
        "birthdate": "2007-09-23T19:53:52 -02:00"
    }, {
        "id": 75,
        "age": 20,
        "name": "Elena Summers",
        "birthdate": "2006-03-28T03:32:31 -02:00"
    }, {
        "id": 76,
        "age": 31,
        "name": "Alyssa Wooten",
        "birthdate": "1992-01-25T07:37:23 -01:00"
    }, {
        "id": 77,
        "age": 38,
        "name": "Hurst Salinas",
        "birthdate": "1992-10-17T09:17:58 -02:00"
    }, {
        "id": 78,
        "age": 22,
        "name": "Tracy Howe",
        "birthdate": "2010-02-05T13:23:29 -01:00"
    }, {
        "id": 79,
        "age": 38,
        "name": "Stella Lamb",
        "birthdate": "2011-09-21T12:28:31 -02:00"
    }, {
        "id": 80,
        "age": 22,
        "name": "Lela Mcbride",
        "birthdate": "2007-06-22T13:51:37 -02:00"
    }, {
        "id": 81,
        "age": 24,
        "name": "Kay Franco",
        "birthdate": "2000-08-02T00:32:29 -02:00"
    }, {
        "id": 82,
        "age": 24,
        "name": "Beach Adams",
        "birthdate": "1992-07-08T22:25:14 -02:00"
    }, {
        "id": 83,
        "age": 25,
        "name": "Conway Gill",
        "birthdate": "2005-08-01T23:25:52 -02:00"
    }, {
        "id": 84,
        "age": 29,
        "name": "Tricia Santana",
        "birthdate": "1997-06-02T00:02:32 -02:00"
    }, {
        "id": 85,
        "age": 24,
        "name": "Kayla Mann",
        "birthdate": "2003-12-21T17:34:05 -01:00"
    }, {
        "id": 86,
        "age": 32,
        "name": "Priscilla Massey",
        "birthdate": "1995-06-27T16:25:15 -02:00"
    }, {
        "id": 87,
        "age": 36,
        "name": "Jennie Guerrero",
        "birthdate": "2014-01-19T20:43:03 -01:00"
    }, {
        "id": 88,
        "age": 27,
        "name": "Gladys Petersen",
        "birthdate": "1991-02-21T21:02:37 -01:00"
    }, {
        "id": 89,
        "age": 27,
        "name": "Padilla Davenport",
        "birthdate": "2003-05-07T22:41:09 -02:00"
    }, {
        "id": 90,
        "age": 37,
        "name": "Higgins Henderson",
        "birthdate": "2003-11-21T05:11:52 -01:00"
    }, {
        "id": 91,
        "age": 28,
        "name": "Shari Pennington",
        "birthdate": "1999-10-29T07:16:39 -02:00"
    }, {
        "id": 92,
        "age": 34,
        "name": "Krystal Tyson",
        "birthdate": "1991-11-17T03:11:31 -01:00"
    }, {
        "id": 93,
        "age": 20,
        "name": "Flossie Mayo",
        "birthdate": "2009-06-25T13:00:25 -02:00"
    }, {
        "id": 94,
        "age": 26,
        "name": "Coleman Rollins",
        "birthdate": "2005-08-13T02:30:05 -02:00"
    }, {
        "id": 95,
        "age": 29,
        "name": "Jana Hawkins",
        "birthdate": "1990-06-12T17:31:50 -02:00"
    }, {
        "id": 96,
        "age": 33,
        "name": "Fulton Steele",
        "birthdate": "1994-11-13T14:18:17 -01:00"
    }, {
        "id": 97,
        "age": 35,
        "name": "Jamie Huff",
        "birthdate": "1999-07-26T03:53:45 -02:00"
    }, {
        "id": 98,
        "age": 29,
        "name": "Hawkins Meyer",
        "birthdate": "1993-01-18T02:44:35 -01:00"
    }, {
        "id": 99,
        "age": 35,
        "name": "Rasmussen Potts",
        "birthdate": "2010-05-02T00:34:57 -02:00"
    }, {
        "id": 100,
        "age": 20,
        "name": "Flynn Henson",
        "birthdate": "2013-02-09T14:21:51 -01:00"
    }, {
        "id": 101,
        "age": 29,
        "name": "Mollie Montgomery",
        "birthdate": "1998-12-09T23:34:02 -01:00"
    }, {
        "id": 102,
        "age": 24,
        "name": "Young Mcclain",
        "birthdate": "1997-11-01T18:58:05 -01:00"
    }, {
        "id": 103,
        "age": 24,
        "name": "Benton Walter",
        "birthdate": "2003-08-27T07:50:22 -02:00"
    }, {
        "id": 104,
        "age": 24,
        "name": "Cardenas Kim",
        "birthdate": "1993-06-06T21:49:39 -02:00"
    }, {
        "id": 105,
        "age": 30,
        "name": "Goff Hale",
        "birthdate": "2005-06-18T20:27:04 -02:00"
    }, {
        "id": 106,
        "age": 21,
        "name": "Byers Thomas",
        "birthdate": "2007-06-05T15:50:09 -02:00"
    }, {
        "id": 107,
        "age": 21,
        "name": "Autumn Kennedy",
        "birthdate": "2013-10-01T07:03:56 -02:00"
    }, {
        "id": 108,
        "age": 22,
        "name": "Vaughn Williams",
        "birthdate": "1989-12-14T01:02:04 -01:00"
    }, {
        "id": 109,
        "age": 35,
        "name": "Arline Ware",
        "birthdate": "1990-05-10T01:50:43 -02:00"
    }, {
        "id": 110,
        "age": 32,
        "name": "Betsy Gray",
        "birthdate": "2003-03-07T23:27:52 -01:00"
    }];

    $scope.committers = [];

    function getStars(){
        RESTService.getStars({
            access_token: 'c6619bf042e53c9796a04fd3a486305ed51c79ad'
        }).then(function(res) {
            console.log(res);
        });
    }

    //getStars();

    $scope.config = {};

});