export function RatingSystem(reviews: any): number {

    // How many reviews
    const totalReviews = reviews.length;
    // console.log(totalReviews);

    const ratings = [
        {
            weight: 5,
            count: 0
        },
        {
            weight: 4,
            count: 0
        },
        {
            weight: 3,
            count: 0
        },
        {
            weight: 2,
            count: 0
        },
        {
            weight: 1,
            count: 0
        }
    ];

    /* eslint-disable */
    reviews.map((item: any) => {
        switch (item.rating) {
            case 5:
                ratings[0].count += 1;
                break;
            case 4:
                ratings[1].count += 1;
                break;
            case 3:
                ratings[2].count += 1;
                break;
            case 2:
                ratings[3].count += 1;
                break;
            case 1:
                ratings[4].count += 1;
                break;

            default:
                break;
        }
    });
    /* eslint-disable */

    // console.log(ratings);

    const calcAverageRating = (ratings: any) => {

        let totalWeight = 0;
        let totalReviews = 0;

        ratings.forEach((rating: any) => {

            const weightMultipliedByNumber = rating.weight * rating.count;
            totalWeight += weightMultipliedByNumber;
            totalReviews += rating.count;
        });

        const averageRating = totalReviews > 0 ? totalWeight / totalReviews : 0;

        return averageRating;
    }

    const weightedAvr = calcAverageRating(ratings);
    // console.log("weightedAvr", weightedAvr);

    return (weightedAvr);

}