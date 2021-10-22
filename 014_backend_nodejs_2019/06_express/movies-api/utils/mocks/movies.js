const moviesMock = [
    {
      "id": "94156f00-db7d-42e3-b5eb-f26e256fcae1",
      "title": "CQ",
      "year": 2001,
      "cover": "http://dummyimage.com/130x249.png/ff4444/ffffff",
      "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "duration": 1922,
      "contentRating": "PG-13",
      "source": "https://cbsnews.com/eleifend/pede.png",
      "tags": [
      "Drama|Romance"
      ]
    },
    {
      "id": "ce16b2c2-1dd0-4e69-8176-09040f11cc2d",
      "title": "Spanish Earth, The",
      "year": 2012,
      "cover": "http://dummyimage.com/143x154.jpg/dddddd/000000",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 1987,
      "contentRating": "PG-13",
      "source": "http://census.gov/volutpat.jsp",
      "tags": [
      "Horror",
      "Documentary",
      "Drama|Romance"
      ]
    },
    {
      "id": "0c008a69-b8bb-4c96-97b3-2031ad0fc758",
      "title": "Mean Streets",
      "year": 1996,
      "cover": "http://dummyimage.com/176x226.bmp/dddddd/000000",
      "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "duration": 1947,
      "contentRating": "PG",
      "source": "http://auda.org.au/sapien/sapien/non/mi.png",
      "tags": [
      "Comedy|Drama"
      ]
    },
    {
      "id": "38436953-f828-4000-a1e3-5ed36c633ff2",
      "title": "Drop Dead Gorgeous",
      "year": 1968,
      "cover": "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
      "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "duration": 1955,
      "contentRating": "R",
      "source": "http://prnewswire.com/aliquam/erat.html",
      "tags": [
      "Thriller"
      ]
    },
    {
      "id": "8ab2f271-5567-4d78-9fed-88ef660451fe",
      "title": "War and Peace (Voyna i mir)",
      "year": 2003,
      "cover": "http://dummyimage.com/240x228.png/ff4444/ffffff",
      "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "duration": 1953,
      "contentRating": "G",
      "source": "https://fda.gov/non/velit/nec/nisi/vulputate/nonummy/maecenas.xml",
      "tags": [
      "Crime|Drama|Fantasy|Film-Noir|Mystery|Romance",
      "Action|Comedy|Crime|Drama"
      ]
    },
    {
      "id": "1dc54123-8186-4cb9-adbb-a145e235871d",
      "title": "Thérèse",
      "year": 2009,
      "cover": "http://dummyimage.com/173x237.jpg/cc0000/ffffff",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "duration": 1912,
      "contentRating": "NC-17",
      "source": "https://1688.com/varius/ut.html",
      "tags": [
      "Drama|Film-Noir",
      "Comedy|Romance",
      "Action|Sci-Fi",
      "Comedy|Drama",
      "Comedy|Drama|Romance"
      ]
    },
    {
      "id": "1cdb6171-8d12-4aea-bd86-c181d6e8cc42",
      "title": "Hunky Dory",
      "year": 2012,
      "cover": "http://dummyimage.com/205x226.bmp/5fa2dd/ffffff",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "duration": 1968,
      "contentRating": "NC-17",
      "source": "http://amazonaws.com/augue/aliquam/erat/volutpat/in/congue/etiam.png",
      "tags": [
      "Action|Thriller",
      "Action|Adventure",
      "Drama|Romance|Sci-Fi"
      ]
    },
    {
      "id": "4c1c536a-f323-4feb-80c1-ca93b896ae70",
      "title": "Five Easy Pieces",
      "year": 1997,
      "cover": "http://dummyimage.com/153x246.png/cc0000/ffffff",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "duration": 2039,
      "contentRating": "PG",
      "source": "http://nhs.uk/maecenas/leo/odio/condimentum.jsp",
      "tags": [
      "Adventure|Animation|Children|Drama|Fantasy"
      ]
    },
    {
      "id": "a8c6c9fc-0107-494f-83ad-9ceadb11dc35",
      "title": "Other, The",
      "year": 1994,
      "cover": "http://dummyimage.com/242x134.jpg/ff4444/ffffff",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 1935,
      "contentRating": "G",
      "source": "https://nba.com/sit.png",
      "tags": [
      "Crime|Drama|Mystery|Thriller"
      ]
    },
    {
      "id": "5d448927-7d8e-49a7-a3bc-280938a05581",
      "title": "Todos eran culpables",
      "year": 1995,
      "cover": "http://dummyimage.com/167x148.jpg/ff4444/ffffff",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "duration": 1901,
      "contentRating": "PG-13",
      "source": "http://google.cn/at/turpis/donec/posuere/metus/vitae/ipsum.jsp",
      "tags": [
      "Action|Adventure|Drama"
      ]
    }
  ];

  module.exports = {
      moviesMock
  }