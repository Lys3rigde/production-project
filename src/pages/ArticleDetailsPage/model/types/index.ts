import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
	comment: ArticleDetailsCommentsSchema
	recommendations: ArticleDetailsPageRecommendationSchema
}
