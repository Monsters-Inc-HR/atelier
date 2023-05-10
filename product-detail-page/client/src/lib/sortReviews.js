export default function(reviews, criteria) {
  // criteria = relevance, recency, helpfulness
  switch (criteria) {
      case 'relevance':
          return reviews.toSorted((a, b) => {
              return new Date(a.date) - new Date(b.date); // sort ascending by date to show difference for now
          });
          break;
      case 'recency':
          return reviews.toSorted((a, b) => new Date(b.date) - new Date(a.date));  // sort descending by date
          break;
      case 'helpfulness':
          return reviews.toSorted((a, b) => b.helpfulness - a.helpfulness);  // sort descending by helpfulness
          break;
  };
};