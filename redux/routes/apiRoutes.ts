export enum API_ROUTES {
  ONBOARDING_QUESTIONS = "/question/get-onboarding-questions",
  GET_S3_SIGNED_UPLOAD_URL = "/get-signed-url-to-put-object",
  GET_VIEW_IMAGE = "/get-signed-url-to-view-object",
  SAVE_USER = "/user/save",
  RECOMMEND_SKIN_CARE = "/recommend-skin-care",
  FETCH_SKIN_CARE_RECOMMENDATIONS = "/fetch-recommendations",
  FETCH_SKIN_CARE_RECOMMENDATIONS_BY_ID = "/fetch-recommendations-by-id",
  FETCH_USER_QUESTION_RESPONSE = "/user/get-question-responses",
  USER_SEND_OTP = "/user/send-otp",
  USER_VERIFY_OTP = "/user/verify-otp",
  USER_LOGIN = "/user/login",
  FETCH_LATEST_RECOMMENDATION_BY_FILTER = "/fetch-latest-recommendation-by-filter",
  FETCH_ADMIN_RECOMMENDATION_BY_ID = "/fetch-admin-recommendations-by-id",
  FETCH_BRANCHES="/user/fetch-branches"
}
