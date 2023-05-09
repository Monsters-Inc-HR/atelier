import React, { useState } from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewsList from './ReviewsList.jsx';

const Reviews = () => {
  // Reviews Meta Data sample
  // GET /reviews/meta?product_id={integer id value}
  const reviewsMetaData = {
      "product_id": "37312",
      "ratings": {
          "1": "16",
          "2": "13",
          "3": "7",
          "4": "3",
          "5": "10"
      },
      "recommended": {
          "false": "5",
          "true": "44"
      },
      "characteristics": {
          "Quality": {
              "id": 125035,
              "value": "3.1428571428571429"
          }
      }
    }

  // Reviews Data sample with all reviews for one item
  // GET /reviews?page={1}&count={ count of ratings or recommended }&sort={newest/helpful/relevant}&product_id={integer id value}
  const reviewsData = {
    "product": "37312",
    "page": 0,
    "count": 49,
    "results": [
        {
          "review_id": 592803,
          "rating": 2,
          "summary": "Aliquid nihil enim eum et dolorem qui cum eaque qui.",
          "recommend": true,
          "response": "\"Commodi dolorem eum nesciunt vel ullam in voluptas.\"",
          "body": "Sint ipsam voluptas voluptatem magni magni. Molestiae maxime et asperiores quia pariatur repellat. Quasi laborum ipsum et unde. Repellendus aut ut quia maxime neque iusto.",
          "date": "2020-08-30T00:00:00.000Z",
          "reviewer_name": "Bonnie.Robel37",
          "helpfulness": 29,
          "photos": [
              {
                  "id": 1106420,
                  "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ]
        },
        {
            "review_id": 1275525,
            "rating": 1,
            "summary": "the future",
            "recommend": true,
            "response": null,
            "body": "is lookin brighter than the sun my guy",
            "date": "2022-07-17T00:00:00.000Z",
            "reviewer_name": "shady",
            "helpfulness": 38,
            "photos": [
                {
                    "id": 2455429,
                    "url": "http://res.cloudinary.com/joehan/image/upload/v1658093793/qj6sbcejvfke6v3kzjcs.gif"
                }
            ]
        },
        {
            "review_id": 1135534,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver6666",
            "helpfulness": 15,
            "photos": []
        },
        {
            "review_id": 1115417,
            "rating": 5,
            "summary": "Wow, you simply must buy this product right away",
            "recommend": true,
            "response": null,
            "body": "Tempor cillum in irure tempor cillum ad. Reprehenderit exercitation minim officia minim amet ut. Mollit et proident deserunt dolore voluptate. Irure mollit dolor occaecat. Est amet duis nostrud tempor enim deserunt sit. Non laborum Lorem aute aute. Non sint ullamco esse. Culpa et amet aliquip.",
            "date": "2021-12-30T00:00:00.000Z",
            "reviewer_name": "siekechu",
            "helpfulness": 10,
            "photos": [
                {
                    "id": 2140826,
                    "url": "http://res.cloudinary.com/dkit4ixkx/image/upload/v1640872880/k5hi3ytvndakxq4y28fp.png"
                },
                {
                    "id": 2140828,
                    "url": "http://res.cloudinary.com/dkit4ixkx/image/upload/v1640872893/qmbbp8oopm1rqx7wm2yc.png"
                },
                {
                    "id": 2140827,
                    "url": "http://res.cloudinary.com/dkit4ixkx/image/upload/v1640872888/imwwt9qq8ntsnyhq2gup.png"
                }
            ]
        },
        {
            "review_id": 1135958,
            "rating": 1,
            "summary": "this shirt is awesome",
            "recommend": true,
            "response": null,
            "body": "fits great. highly recommend. here are pics.",
            "date": "2022-02-25T00:00:00.000Z",
            "reviewer_name": "King Meow",
            "helpfulness": 5,
            "photos": [
                {
                    "id": 2180218,
                    "url": "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                },
                {
                    "id": 2180219,
                    "url": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
                },
                {
                    "id": 2180221,
                    "url": "https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1200&q=88&f=e4241cd2c228c6e075a0ac0d54c8ef39"
                },
                {
                    "id": 2180220,
                    "url": "https://s.w-x.co/in-cat_in_glasses.jpg"
                }
            ]
        },
        {
            "review_id": 1135535,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver7777",
            "helpfulness": 4,
            "photos": []
        },
        {
            "review_id": 1175744,
            "rating": 3,
            "summary": "Too dark",
            "recommend": false,
            "response": null,
            "body": "I wore these to the beach and tripped on a coconut.",
            "date": "2022-04-07T00:00:00.000Z",
            "reviewer_name": "OceanMan",
            "helpfulness": 3,
            "photos": []
        },
        {
            "review_id": 1278971,
            "rating": 2,
            "summary": "not that awesome...",
            "recommend": true,
            "response": null,
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat interdum aliquam. Fusce tristique tempor facilisis. Proin porttitor suscipit nisl sed eleifend. Phasellus pulvinar est at nisl finibus dignissim. Suspendisse a augue ac nulla commodo volutpat. Sed in bibendum metus. Sed pulvinar, nibh non maximus imperdiet, magna leo ullamcorper risus, non tincidunt augue felis eu quam. Nullam fermentum imperdiet mauris, vitae fringilla felis. Nullam ullamcorper diam et felis pharetra feugiat. Aenean id gravida turpis. In quis augue vel purus sollicitudin consequat eget ac nisi. Nullam accumsan eleifend magna, eu varius libero hendrerit id.",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "notawesomeuser",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2457421,
                    "url": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                },
                {
                    "id": 2457423,
                    "url": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                    "id": 2457422,
                    "url": "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
            ]
        },
        {
            "review_id": 1278970,
            "rating": 5,
            "summary": "Awesome!!!!",
            "recommend": true,
            "response": null,
            "body": "Proin ut tristique nunc. Quisque luctus metus sed odio accumsan, vel luctus quam blandit. Suspendisse sed lacus blandit, tempor enim sit amet, auctor urna. Nulla dapibus libero at erat scelerisque eleifend. Suspendisse ultrices ut lectus eu dignissim. Praesent nibh eros, vehicula id mattis non, semper vel massa. Proin interdum diam eu magna rutrum, non malesuada risus finibus. Donec non risus justo. Nunc quis gravida purus, quis mattis magna. Nulla ullamcorper a arcu non blandit. Sed eu cursus ligula, sit amet tincidunt ante.\n\nMauris aliquam facilisis condimentum. Vivamus non sem eros. Nunc scelerisque, tortor in placerat auctor, arcu purus consequat erat, vel hendrerit odio mauris id leo. Praesent quis metus maximus, pellentesque ex ac, dictum nisi. In et aliquam purus, in congue nunc. Fusce ac elit massa. Praesent vitae dolor nisi. Proin mauris est, consectetur vitae varius vitae, fringilla ut tellus.\n\n",
            "date": "2023-02-09T00:00:00.000Z",
            "reviewer_name": "Wowuserq!",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2457418,
                    "url": "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                },
                {
                    "id": 2457420,
                    "url": "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                },
                {
                    "id": 2457419,
                    "url": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
            ]
        },
        {
            "review_id": 1275669,
            "rating": 5,
            "summary": "Chester B Arthur",
            "recommend": true,
            "response": null,
            "body": "spongebob likes it a lot, he does he does he doess",
            "date": "2022-07-19T00:00:00.000Z",
            "reviewer_name": "johnbarleycorn",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1279374,
            "rating": 1,
            "summary": "Bought em sight unseen",
            "recommend": false,
            "response": null,
            "body": "Sooo I put a lot of faith in this company to be on the forefront of urban style so I said what the hey and bought em. Pic attached.",
            "date": "2023-03-30T00:00:00.000Z",
            "reviewer_name": "wearinemanyway",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2458403,
                    "url": "https://res.cloudinary.com/dyrlg2pzz/image/upload/v1680200976/atelier/yhcri1zjijsotgqq2gss.jpg"
                }
            ]
        },
        {
            "review_id": 1278603,
            "rating": 5,
            "summary": "Nice product. Would buy again!",
            "recommend": true,
            "response": null,
            "body": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#x27;lorem ipsum&#x27; will uncover many web sites still in their infancy.",
            "date": "2023-02-05T00:00:00.000Z",
            "reviewer_name": "user109",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457228,
                    "url": "https://picsum.photos/200/300"
                }
            ]
        },
        {
            "review_id": 1278601,
            "rating": 3,
            "summary": "Quality is ok",
            "recommend": true,
            "response": null,
            "body": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
            "date": "2023-02-05T00:00:00.000Z",
            "reviewer_name": "user99",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457227,
                    "url": "https://picsum.photos/200/300"
                }
            ]
        },
        {
            "review_id": 1278600,
            "rating": 4,
            "summary": "Great product",
            "recommend": true,
            "response": null,
            "body": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "date": "2023-02-05T00:00:00.000Z",
            "reviewer_name": "user80",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457226,
                    "url": "https://picsum.photos/200/300"
                }
            ]
        },
        {
            "review_id": 1274444,
            "rating": 1,
            "summary": "How",
            "recommend": true,
            "response": null,
            "body": "How does this thing work?",
            "date": "2022-05-24T00:00:00.000Z",
            "reviewer_name": "Testy McTestface",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1274443,
            "rating": 1,
            "summary": "How",
            "recommend": true,
            "response": null,
            "body": "How does this thing work?",
            "date": "2022-05-24T00:00:00.000Z",
            "reviewer_name": "Testy McTestface",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1275436,
            "rating": 5,
            "summary": "Chester B Arthur",
            "recommend": true,
            "response": null,
            "body": " let boom = characteristicCreater(); let boom = characteristicCreater();",
            "date": "2022-07-15T00:00:00.000Z",
            "reviewer_name": "johnbarleycorn",
            "helpfulness": 0,
            "photos": []
        }
      ]
    }

  const [filters, setFilters] = useState([]); // empty array means no filters will be applied
  const [sortBy, setSortBy] = useState('relevant'); // relevant is the default sort by option
  const [reviewsList, setReviewsList] = useState(reviewsData.results);

  const filterClick = (star) => {
    let newFilters = filters;
    if (filters.includes(star)) {
        newFilters = newFilters.filter(option => option !== star);  // remove this star from the filters
    } else {
        newFilters.push(star); // add this star to the filters
    }
    setFilters(newFilters);
    setReviewsList(newFilters.length === 0 ? reviewsData.results : reviewsData.results.filter(review => newFilters.includes(review.rating)));
  };

  const removeFilters = () => {
    console.log('hello');
    setFilters([]);
    setReviewsList(reviewsData.results);
  }

  return (
    <div className='ratings-and-reviews'>
      <div className='rr-title'>RATINGS & REVIEWS</div>
      <div className='rr-content'>
        <ReviewsSummary metaData={ reviewsMetaData } filterClick={ filterClick } removeFilters={ removeFilters }/>
        <ReviewsList reviews={ reviewsList } />
      </div>
    </div>
  )
}

export default Reviews;