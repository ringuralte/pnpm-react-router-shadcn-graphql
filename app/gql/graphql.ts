/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: { input: any; output: any; }
};

export type AppImage = {
  __typename?: 'AppImage';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};

export type AppPaginatorInfo = {
  __typename?: 'AppPaginatorInfo';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AppSetting = {
  __typename?: 'AppSetting';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ConvenienceFee = {
  __typename?: 'ConvenienceFee';
  amount: Scalars['Float']['output'];
};

export type Coupon = {
  __typename?: 'Coupon';
  /** Number of times this coupon has been used */
  coupon_usage_count: Scalars['Int']['output'];
  discount_percent: Scalars['Float']['output'];
  event: Event;
  event_id: Scalars['ID']['output'];
  expiry_date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_published: Scalars['Boolean']['output'];
  max_usage?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type CreateCouponInput = {
  discount_percent: Scalars['Float']['input'];
  event_id: Scalars['ID']['input'];
  expiry_date: Scalars['DateTime']['input'];
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  /** max number of times this coupon can be used */
  max_usage?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type CreateEventTicketTypeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  is_convenience_fee_incl: Scalars['Boolean']['input'];
  is_gst_incl: Scalars['Boolean']['input'];
  maximum_capacity: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  /** Optional start date */
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_type: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  address: Scalars['String']['output'];
  artists?: Maybe<Array<Maybe<EventArtist>>>;
  /** used for filtering events by city */
  city?: Maybe<Scalars['String']['output']>;
  coupons?: Maybe<Array<Maybe<Coupon>>>;
  description?: Maybe<Scalars['String']['output']>;
  end_date: Scalars['DateTime']['output'];
  eventTicketTypes?: Maybe<Array<Maybe<EventTicketType>>>;
  faq?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<AppImage>>>;
  /** Cannot be booked by public. Only for invitees */
  is_private_event: Scalars['Boolean']['output'];
  is_published: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  open_mic_link?: Maybe<Scalars['String']['output']>;
  /** default is 0 */
  order: Scalars['Int']['output'];
  org_contact_number: Scalars['String']['output'];
  organizer_name: Scalars['String']['output'];
  seatingPlan?: Maybe<AppImage>;
  slug: Scalars['String']['output'];
  sportTicketTypes?: Maybe<Array<Maybe<SportTicketType>>>;
  start_booking_date?: Maybe<Scalars['DateTime']['output']>;
  start_date: Scalars['DateTime']['output'];
  /** default is general */
  type: Scalars['String']['output'];
  user: User;
};

export type EventArtist = {
  __typename?: 'EventArtist';
  avatar: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  social_link?: Maybe<Scalars['String']['output']>;
};

export type EventArtistsInput = {
  artist_name: Scalars['String']['input'];
  avatar: Scalars['Upload']['input'];
  social_link?: InputMaybe<Scalars['String']['input']>;
};

export type EventAttendeesResponse = {
  __typename?: 'EventAttendeesResponse';
  data?: Maybe<Array<Maybe<EventTicketPurchase>>>;
  paginatorInfo?: Maybe<EventAttendeesResponsePaginatorInfo>;
};

export type EventAttendeesResponsePaginatorInfo = {
  __typename?: 'EventAttendeesResponsePaginatorInfo';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventCheckIns = {
  __typename?: 'EventCheckIns';
  checkedInBy?: Maybe<User>;
  checked_in_by: Scalars['ID']['output'];
  created_at: Scalars['DateTime']['output'];
  eventTicketPurchase?: Maybe<EventTicketPurchase>;
  event_ticket_purchase_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** A paginated list of Event items. */
export type EventPaginator = {
  __typename?: 'EventPaginator';
  /** A list of Event items. */
  data: Array<Event>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type EventTicketPurchase = {
  __typename?: 'EventTicketPurchase';
  amount_paid: Scalars['Float']['output'];
  /** Organizers contact number */
  contact_number: Scalars['String']['output'];
  convenience_fee?: Maybe<Scalars['Float']['output']>;
  coupon?: Maybe<Coupon>;
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  eventTicketType?: Maybe<EventTicketType>;
  event_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_gift?: Maybe<Scalars['Boolean']['output']>;
  /** User mobile number */
  mobile_number?: Maybe<Scalars['String']['output']>;
  number_of_tickets: Scalars['Int']['output'];
  paymentOrder?: Maybe<PaymentOrder>;
  /** Ticket payment status. Will be set according to status received from 3rd party payment provider Note: this is not 3rd party payment provider status */
  payment_status: Scalars['String']['output'];
  pdf_media_id?: Maybe<Scalars['String']['output']>;
  qrcode?: Maybe<Scalars['String']['output']>;
  recipient_message?: Maybe<Scalars['String']['output']>;
  recipient_name?: Maybe<Scalars['String']['output']>;
  recipient_phone?: Maybe<Scalars['String']['output']>;
  scanned_at?: Maybe<Scalars['DateTime']['output']>;
  scanned_by?: Maybe<Scalars['ID']['output']>;
  ticket_path?: Maybe<Scalars['String']['output']>;
  tickets_scanned_count: Scalars['Int']['output'];
  tip_amount: Scalars['Float']['output'];
  tip_message?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  whatsapp_sent_status?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of EventTicketPurchase items. */
export type EventTicketPurchasePaginator = {
  __typename?: 'EventTicketPurchasePaginator';
  /** A list of EventTicketPurchase items. */
  data: Array<EventTicketPurchase>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type EventTicketType = {
  __typename?: 'EventTicketType';
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  is_convenience_fee_incl: Scalars['Boolean']['output'];
  is_gst_incl: Scalars['Boolean']['output'];
  maximum_capacity: Scalars['Int']['output'];
  price: Scalars['String']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  /** Must be used sparringly. possible types : `sold_out` | `filling_fast` | `few_left` | `available` */
  status: Scalars['String']['output'];
  /** `sold_out` | `filling_fast` | `few_left` */
  tags?: Maybe<Scalars['String']['output']>;
  ticket_type: Scalars['String']['output'];
};

export enum EventType {
  General = 'GENERAL',
  Msl = 'MSL'
}

/** Non-Sport guest list */
export type GeneralGuestList = {
  __typename?: 'GeneralGuestList';
  data?: Maybe<Array<EventTicketPurchase>>;
  paginatorInfo: AppPaginatorInfo;
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message: Scalars['String']['output'];
};

export type GetEventsPaginator = {
  __typename?: 'GetEventsPaginator';
  data?: Maybe<Array<Event>>;
  paginatorInfo: AppPaginatorInfo;
};

export type GuestListResponse = GeneralGuestList | SportGuestList;

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addInvitee?: Maybe<EventTicketPurchase>;
  /** only for superadmin */
  addOrganizer?: Maybe<SuccessResponse>;
  addSpotlight: GenericResponse;
  addStaff?: Maybe<User>;
  adminLogin?: Maybe<LoginResponse>;
  createCoupon?: Maybe<GenericResponse>;
  createEvent?: Maybe<Event>;
  createOrganizer?: Maybe<GenericResponse>;
  createPayment?: Maybe<OrderResponse>;
  createSportEventPayment: OrderResponse;
  deleteCoupon?: Maybe<Coupon>;
  deleteEvent?: Maybe<Event>;
  deleteEventArtist?: Maybe<SuccessResponse>;
  deleteImageById?: Maybe<SuccessResponse>;
  deleteOrganizer?: Maybe<GenericResponse>;
  deleteSettingByKey?: Maybe<AppSetting>;
  deleteSpotlight: GenericResponse;
  deleteStaff?: Maybe<SuccessResponse>;
  deleteTicketType?: Maybe<EventTicketType>;
  exportGuestList?: Maybe<GenericResponse>;
  /** Generate ticket and send it to mobile_number */
  generateTicket?: Maybe<SuccessResponse>;
  generateTicketForTicketPurchase?: Maybe<GenericResponse>;
  getSettings?: Maybe<Array<Maybe<AppSetting>>>;
  issueRefund?: Maybe<RefundResponse>;
  logout?: Maybe<SuccessResponse>;
  notifyUpcomingEvent?: Maybe<Event>;
  onboardOrganizer?: Maybe<OrganizerOnBoarding>;
  redeemCoupon?: Maybe<RedeemCouponResponse>;
  refundTicket?: Maybe<GenericResponse>;
  resendTicket?: Maybe<GenericResponse>;
  sendWhatsAppToInvitees?: Maybe<SuccessResponse>;
  setConvenienceFeeForEvent?: Maybe<SuccessResponse>;
  submitQRCode?: Maybe<SubmitQrCodeResponse>;
  supportLogin?: Maybe<LoginResponse>;
  updateCoupon?: Maybe<Coupon>;
  updateEvent?: Maybe<Event>;
  /** only for superadmin */
  updateOrganizer?: Maybe<User>;
  updateSpotlight: GenericResponse;
  updateStaff?: Maybe<User>;
  upsertEventArtist?: Maybe<EventArtist>;
  upsertSetting?: Maybe<AppSetting>;
  userLogin?: Maybe<User>;
  userRequestRefund?: Maybe<GenericResponse>;
};


export type MutationAddInviteeArgs = {
  event_id: Scalars['ID']['input'];
  mobile_number: Scalars['String']['input'];
  number_of_tickets: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationAddOrganizerArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAddSpotlightArgs = {
  image: Scalars['Upload']['input'];
  is_external?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddStaffArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationAdminLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateCouponArgs = {
  data: Array<CreateCouponInput>;
};


export type MutationCreateEventArgs = {
  address: Scalars['String']['input'];
  artists?: InputMaybe<Array<InputMaybe<EventArtistsInput>>>;
  city: Scalars['String']['input'];
  convenience_fee?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date: Scalars['DateTime']['input'];
  event_images: Array<InputMaybe<Scalars['Upload']['input']>>;
  event_ticket_types: Array<InputMaybe<CreateEventTicketTypeInput>>;
  event_type?: InputMaybe<EventType>;
  faq?: InputMaybe<Scalars['String']['input']>;
  is_private_event?: InputMaybe<Scalars['Boolean']['input']>;
  is_published: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  open_mic_link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  org_contact_number: Scalars['String']['input'];
  organizer_name: Scalars['String']['input'];
  start_booking_date?: InputMaybe<Scalars['DateTime']['input']>;
  start_date: Scalars['DateTime']['input'];
};


export type MutationCreateOrganizerArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreatePaymentArgs = {
  coupon_hash?: InputMaybe<Scalars['String']['input']>;
  event_ticket_type_id: Scalars['ID']['input'];
  is_gift?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_number: Scalars['String']['input'];
  num_of_tickets: Scalars['Int']['input'];
  recipient_message?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  tip_amount?: InputMaybe<Scalars['Float']['input']>;
  tip_message?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateSportEventPaymentArgs = {
  is_gift?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_number: Scalars['String']['input'];
  number_of_tickets?: InputMaybe<Scalars['Int']['input']>;
  recipient_message?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  seat_numbers: Array<Scalars['Int']['input']>;
  ticket_type_id: Scalars['Int']['input'];
  tip_amount?: InputMaybe<Scalars['Float']['input']>;
  tip_message?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationDeleteCouponArgs = {
  coupon_id: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventArtistArgs = {
  event_artist_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteOrganizerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSettingByKeyArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteSpotlightArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStaffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTicketTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExportGuestListArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  phone_number: Scalars['String']['input'];
};


export type MutationGenerateTicketArgs = {
  event_id: Scalars['ID']['input'];
  event_ticket_type_id: Scalars['ID']['input'];
  mobile_number: Scalars['String']['input'];
  num_of_tickets: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationGenerateTicketForTicketPurchaseArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationIssueRefundArgs = {
  amount: Scalars['Float']['input'];
  order_id: Scalars['String']['input'];
};


export type MutationNotifyUpcomingEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOnboardOrganizerArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  mobile_number: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRedeemCouponArgs = {
  coupon: Scalars['String']['input'];
  event_id: Scalars['ID']['input'];
};


export type MutationRefundTicketArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationResendTicketArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationSendWhatsAppToInviteesArgs = {
  event_id: Scalars['ID']['input'];
  id: Array<Scalars['ID']['input']>;
};


export type MutationSetConvenienceFeeForEventArgs = {
  convenience_fee: Scalars['Float']['input'];
  event_id: Scalars['ID']['input'];
};


export type MutationSubmitQrCodeArgs = {
  no_of_person_scanned?: InputMaybe<Scalars['Int']['input']>;
  qr_code: Scalars['String']['input'];
};


export type MutationSupportLoginArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationUpdateCouponArgs = {
  coupon_id: Scalars['ID']['input'];
  discount_percent?: InputMaybe<Scalars['Float']['input']>;
  event_id?: InputMaybe<Scalars['ID']['input']>;
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  max_usage?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEventArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  convenience_fee?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  event_images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  event_type?: InputMaybe<EventType>;
  faq?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_private_event?: InputMaybe<Scalars['Boolean']['input']>;
  is_published: Scalars['Boolean']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  open_mic_link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  org_contact_number?: InputMaybe<Scalars['String']['input']>;
  organizer_name?: InputMaybe<Scalars['String']['input']>;
  seating_plan?: InputMaybe<Scalars['Upload']['input']>;
  start_booking_date?: InputMaybe<Scalars['DateTime']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOrganizerArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSpotlightArgs = {
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  is_external?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateStaffArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpsertEventArtistArgs = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  event_id: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  social_link?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpsertSettingArgs = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserLoginArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserRequestRefundArgs = {
  event_id: Scalars['ID']['input'];
  phone_number: Scalars['String']['input'];
};

export type MyEventsPaginator = {
  __typename?: 'MyEventsPaginator';
  data?: Maybe<Array<Event>>;
  paginatorInfo: AppPaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Response of 3rd party payment */
export type OrderResponse = {
  __typename?: 'OrderResponse';
  goto_url?: Maybe<Scalars['String']['output']>;
  mobile_number: Scalars['String']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  /** provider used for creating the order. razorpay | phonepe | sgpg */
  provider_type: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type OrganizerListPaginator = {
  __typename?: 'OrganizerListPaginator';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  organizers?: Maybe<Array<User>>;
  total: Scalars['Int']['output'];
};

export type OrganizerOnBoarding = {
  __typename?: 'OrganizerOnBoarding';
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile_number: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type OtpResponse = {
  __typename?: 'OtpResponse';
  otp_id: Scalars['ID']['output'];
};

export type PpResponse = {
  __typename?: 'PPResponse';
  data?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PaymentOrder = {
  __typename?: 'PaymentOrder';
  id: Scalars['ID']['output'];
  paymentable?: Maybe<PaymentableOrder>;
  paymentable_id: Scalars['ID']['output'];
  paymentable_type: Scalars['String']['output'];
};

export type PaymentableOrder = PhonePePaymentOrder | RzpayPaymentOrder | SgpgPaymentOrder;

export type PhonePePaymentOrder = {
  __typename?: 'PhonePePaymentOrder';
  error_detail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_instrument_type?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['String']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  refund_transaction_id?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transaction_id?: Maybe<Scalars['String']['output']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  /** Get all admin events */
  adminEvents?: Maybe<Array<Maybe<Event>>>;
  admins: UserPaginator;
  checkPhonePeHealth?: Maybe<PpResponse>;
  checkTransactionStatus?: Maybe<PaymentOrder>;
  /** Get event attendees */
  eventAttendees?: Maybe<EventAttendeesResponse>;
  eventById?: Maybe<Event>;
  eventBySlug?: Maybe<Event>;
  events: EventPaginator;
  generateRawReports: GenericResponse;
  getConvenienceFee?: Maybe<ConvenienceFee>;
  /** for admin only */
  getCouponsForEvent?: Maybe<Array<Maybe<Coupon>>>;
  getEventTicketPurchase: EventTicketPurchasePaginator;
  getEvents: GetEventsPaginator;
  /** Get guest list for event id for auth admin */
  getGuestList: GuestListResponse;
  getInvitees: EventTicketPurchasePaginator;
  getMe?: Maybe<AuthResponse>;
  getPastEvents: EventPaginator;
  getSeatsForSportsEvent: SeatsForSportEvent;
  getSettingByKey?: Maybe<AppSetting>;
  getSpotlightList?: Maybe<Array<Spotlight>>;
  /** Get staffs for currently logged in 'Admin' */
  getStaffs?: Maybe<Array<Maybe<User>>>;
  getTicketPurchaseDetail?: Maybe<TicketPurchaseDetail>;
  getTicketStatsForEvent?: Maybe<TicketStatusResponse>;
  getTicketTypesForEvent?: Maybe<Event>;
  isTicketDownloadable?: Maybe<TicketDownloadableResponse>;
  myEvents: MyEventsPaginator;
  organizerList?: Maybe<OrganizerListPaginator>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryAdminsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCheckTransactionStatusArgs = {
  merchant_trnx_id: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventAttendeesArgs = {
  event_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Scalars['String']['input']>;
  ticket_type_id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventByIdArgs = {
  id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventBySlugArgs = {
  slug: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventsArgs = {
  current_datetime: Scalars['DateTime']['input'];
  first?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGenerateRawReportsArgs = {
  file_name: Scalars['String']['input'];
  q: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetConvenienceFeeArgs = {
  ticket_type_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetCouponsForEventArgs = {
  event_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetEventTicketPurchaseArgs = {
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetEventsArgs = {
  first: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetGuestListArgs = {
  event_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  ticket_type_id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetInviteesArgs = {
  event_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetPastEventsArgs = {
  current_datetime: Scalars['DateTime']['input'];
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSeatsForSportsEventArgs = {
  ticket_type_id: Scalars['Int']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSettingByKeyArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketPurchaseDetailArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  qrcode: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketStatsForEventArgs = {
  event_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketTypesForEventArgs = {
  id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryIsTicketDownloadableArgs = {
  order_id: Scalars['String']['input'];
  payment_id: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryMyEventsArgs = {
  first: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryOrganizerListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type RedeemCouponResponse = {
  __typename?: 'RedeemCouponResponse';
  /** discount percentage */
  amount: Scalars['Float']['output'];
  /** coupon hash */
  rc: Scalars['String']['output'];
  /** remaining coupon */
  remaining_cp: Scalars['Int']['output'];
};

export type RefundResponse = {
  __typename?: 'RefundResponse';
  reason?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type RzpayPaymentOrder = {
  __typename?: 'RzpayPaymentOrder';
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['Float']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_id?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type SgpgPaymentOrder = {
  __typename?: 'SGPGPaymentOrder';
  error_detail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_instrument_type?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['String']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  refund_transaction_id?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transaction_id?: Maybe<Scalars['String']['output']>;
};

export type SeatsForSportEvent = {
  __typename?: 'SeatsForSportEvent';
  all_seats?: Maybe<Array<Scalars['Int']['output']>>;
  available_seats?: Maybe<Array<Scalars['Int']['output']>>;
  /** cv for a single ticket calculated off of single ticket price */
  convenience_fee: Scalars['Float']['output'];
  /** price for single ticket of a particular ticket type */
  price: Scalars['Float']['output'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type SportGuestList = {
  __typename?: 'SportGuestList';
  data?: Maybe<Array<SportTicketPurchase>>;
  paginatorInfo: AppPaginatorInfo;
};

export type SportTicketPurchase = {
  __typename?: 'SportTicketPurchase';
  amount_paid: Scalars['Float']['output'];
  /** Organizers contact number */
  contact_number: Scalars['String']['output'];
  convenience_fee?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  eventTicketType?: Maybe<SportTicketType>;
  event_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_gift?: Maybe<Scalars['Boolean']['output']>;
  /** User mobile number */
  mobile_number?: Maybe<Scalars['String']['output']>;
  number_of_tickets: Scalars['Int']['output'];
  paymentOrder?: Maybe<PaymentOrder>;
  /** Ticket payment status. Will be set according to status received from 3rd party payment provider Note: this is not 3rd party payment provider status */
  payment_status: Scalars['String']['output'];
  pdf_media_id?: Maybe<Scalars['String']['output']>;
  qrcode?: Maybe<Scalars['String']['output']>;
  recipient_message?: Maybe<Scalars['String']['output']>;
  recipient_name?: Maybe<Scalars['String']['output']>;
  recipient_phone?: Maybe<Scalars['String']['output']>;
  scanned_at?: Maybe<Scalars['DateTime']['output']>;
  scanned_by?: Maybe<Scalars['ID']['output']>;
  /** general does not have seat number */
  seat_numbers: Array<Scalars['Int']['output']>;
  should_consider_seat: Scalars['Boolean']['output'];
  ticket_path?: Maybe<Scalars['String']['output']>;
  tickets_scanned_count: Scalars['Int']['output'];
  tip_amount: Scalars['Float']['output'];
  tip_message?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  whatsapp_sent_status?: Maybe<Scalars['String']['output']>;
};

export type SportTicketType = {
  __typename?: 'SportTicketType';
  end_seat_number: Scalars['Int']['output'];
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  should_consider_seat: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  start_seat_number: Scalars['Int']['output'];
  ticket_type: Scalars['String']['output'];
};

export type Spotlight = {
  __typename?: 'Spotlight';
  app_image_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: AppImage;
  /** if true, should open link(url) in new tab */
  is_external?: Maybe<Scalars['Boolean']['output']>;
  /** ascending order */
  order: Scalars['Int']['output'];
  /** optional url for when spotlight is clicked */
  url?: Maybe<Scalars['String']['output']>;
};

export type SubmitQrCodeResponse = {
  __typename?: 'SubmitQRCodeResponse';
  error?: Maybe<Scalars['String']['output']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message: Scalars['String']['output'];
};

export type TicketDownloadableResponse = {
  __typename?: 'TicketDownloadableResponse';
  amount: Scalars['Float']['output'];
  ticket_path?: Maybe<Scalars['String']['output']>;
};

export type TicketPurchaseDetail = EventTicketPurchase | SportTicketPurchase;

export type TicketStatusResponse = {
  __typename?: 'TicketStatusResponse';
  ticket_type_stats?: Maybe<Array<Maybe<TicketTypeStats>>>;
  /** Total amount excluding convenience fee */
  total_amount?: Maybe<Scalars['Float']['output']>;
  total_tickets_sold?: Maybe<Scalars['Int']['output']>;
  total_tip_amount?: Maybe<Scalars['Float']['output']>;
};

export type TicketTypeStats = {
  __typename?: 'TicketTypeStats';
  num_of_tickets: Scalars['Int']['output'];
  ticket_type: Scalars['String']['output'];
};

export type TicketTypeStatus = {
  __typename?: 'TicketTypeStatus';
  ticket_type: Scalars['String']['output'];
  ticket_type_id: Scalars['ID']['output'];
  /** possible values : `sold_out` | `filling_fast` | `few_left` | `available` */
  value: Scalars['String']['output'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  role: Scalars['String']['output'];
  rzpay_account_id?: Maybe<Scalars['String']['output']>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
  verified_at?: Maybe<Scalars['DateTime']['output']>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'AuthResponse', user?: { __typename?: 'User', id: string } | null } | null };


export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: { input: any; output: any; }
};

export type AppImage = {
  __typename?: 'AppImage';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};

export type AppPaginatorInfo = {
  __typename?: 'AppPaginatorInfo';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AppSetting = {
  __typename?: 'AppSetting';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ConvenienceFee = {
  __typename?: 'ConvenienceFee';
  amount: Scalars['Float']['output'];
};

export type Coupon = {
  __typename?: 'Coupon';
  /** Number of times this coupon has been used */
  coupon_usage_count: Scalars['Int']['output'];
  discount_percent: Scalars['Float']['output'];
  event: Event;
  event_id: Scalars['ID']['output'];
  expiry_date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_published: Scalars['Boolean']['output'];
  max_usage?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type CreateCouponInput = {
  discount_percent: Scalars['Float']['input'];
  event_id: Scalars['ID']['input'];
  expiry_date: Scalars['DateTime']['input'];
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  /** max number of times this coupon can be used */
  max_usage?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type CreateEventTicketTypeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  is_convenience_fee_incl: Scalars['Boolean']['input'];
  is_gst_incl: Scalars['Boolean']['input'];
  maximum_capacity: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  /** Optional start date */
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  ticket_type: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  address: Scalars['String']['output'];
  artists?: Maybe<Array<Maybe<EventArtist>>>;
  /** used for filtering events by city */
  city?: Maybe<Scalars['String']['output']>;
  coupons?: Maybe<Array<Maybe<Coupon>>>;
  description?: Maybe<Scalars['String']['output']>;
  end_date: Scalars['DateTime']['output'];
  eventTicketTypes?: Maybe<Array<Maybe<EventTicketType>>>;
  faq?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<AppImage>>>;
  /** Cannot be booked by public. Only for invitees */
  is_private_event: Scalars['Boolean']['output'];
  is_published: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  open_mic_link?: Maybe<Scalars['String']['output']>;
  /** default is 0 */
  order: Scalars['Int']['output'];
  org_contact_number: Scalars['String']['output'];
  organizer_name: Scalars['String']['output'];
  seatingPlan?: Maybe<AppImage>;
  slug: Scalars['String']['output'];
  sportTicketTypes?: Maybe<Array<Maybe<SportTicketType>>>;
  start_booking_date?: Maybe<Scalars['DateTime']['output']>;
  start_date: Scalars['DateTime']['output'];
  /** default is general */
  type: Scalars['String']['output'];
  user: User;
};

export type EventArtist = {
  __typename?: 'EventArtist';
  avatar: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  social_link?: Maybe<Scalars['String']['output']>;
};

export type EventArtistsInput = {
  artist_name: Scalars['String']['input'];
  avatar: Scalars['Upload']['input'];
  social_link?: InputMaybe<Scalars['String']['input']>;
};

export type EventAttendeesResponse = {
  __typename?: 'EventAttendeesResponse';
  data?: Maybe<Array<Maybe<EventTicketPurchase>>>;
  paginatorInfo?: Maybe<EventAttendeesResponsePaginatorInfo>;
};

export type EventAttendeesResponsePaginatorInfo = {
  __typename?: 'EventAttendeesResponsePaginatorInfo';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventCheckIns = {
  __typename?: 'EventCheckIns';
  checkedInBy?: Maybe<User>;
  checked_in_by: Scalars['ID']['output'];
  created_at: Scalars['DateTime']['output'];
  eventTicketPurchase?: Maybe<EventTicketPurchase>;
  event_ticket_purchase_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** A paginated list of Event items. */
export type EventPaginator = {
  __typename?: 'EventPaginator';
  /** A list of Event items. */
  data: Array<Event>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type EventTicketPurchase = {
  __typename?: 'EventTicketPurchase';
  amount_paid: Scalars['Float']['output'];
  /** Organizers contact number */
  contact_number: Scalars['String']['output'];
  convenience_fee?: Maybe<Scalars['Float']['output']>;
  coupon?: Maybe<Coupon>;
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  eventTicketType?: Maybe<EventTicketType>;
  event_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_gift?: Maybe<Scalars['Boolean']['output']>;
  /** User mobile number */
  mobile_number?: Maybe<Scalars['String']['output']>;
  number_of_tickets: Scalars['Int']['output'];
  paymentOrder?: Maybe<PaymentOrder>;
  /** Ticket payment status. Will be set according to status received from 3rd party payment provider Note: this is not 3rd party payment provider status */
  payment_status: Scalars['String']['output'];
  pdf_media_id?: Maybe<Scalars['String']['output']>;
  qrcode?: Maybe<Scalars['String']['output']>;
  recipient_message?: Maybe<Scalars['String']['output']>;
  recipient_name?: Maybe<Scalars['String']['output']>;
  recipient_phone?: Maybe<Scalars['String']['output']>;
  scanned_at?: Maybe<Scalars['DateTime']['output']>;
  scanned_by?: Maybe<Scalars['ID']['output']>;
  ticket_path?: Maybe<Scalars['String']['output']>;
  tickets_scanned_count: Scalars['Int']['output'];
  tip_amount: Scalars['Float']['output'];
  tip_message?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  whatsapp_sent_status?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of EventTicketPurchase items. */
export type EventTicketPurchasePaginator = {
  __typename?: 'EventTicketPurchasePaginator';
  /** A list of EventTicketPurchase items. */
  data: Array<EventTicketPurchase>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type EventTicketType = {
  __typename?: 'EventTicketType';
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  is_convenience_fee_incl: Scalars['Boolean']['output'];
  is_gst_incl: Scalars['Boolean']['output'];
  maximum_capacity: Scalars['Int']['output'];
  price: Scalars['String']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  /** Must be used sparringly. possible types : `sold_out` | `filling_fast` | `few_left` | `available` */
  status: Scalars['String']['output'];
  /** `sold_out` | `filling_fast` | `few_left` */
  tags?: Maybe<Scalars['String']['output']>;
  ticket_type: Scalars['String']['output'];
};

export enum EventType {
  General = 'GENERAL',
  Msl = 'MSL'
}

/** Non-Sport guest list */
export type GeneralGuestList = {
  __typename?: 'GeneralGuestList';
  data?: Maybe<Array<EventTicketPurchase>>;
  paginatorInfo: AppPaginatorInfo;
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message: Scalars['String']['output'];
};

export type GetEventsPaginator = {
  __typename?: 'GetEventsPaginator';
  data?: Maybe<Array<Event>>;
  paginatorInfo: AppPaginatorInfo;
};

export type GuestListResponse = GeneralGuestList | SportGuestList;

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addInvitee?: Maybe<EventTicketPurchase>;
  /** only for superadmin */
  addOrganizer?: Maybe<SuccessResponse>;
  addSpotlight: GenericResponse;
  addStaff?: Maybe<User>;
  adminLogin?: Maybe<LoginResponse>;
  createCoupon?: Maybe<GenericResponse>;
  createEvent?: Maybe<Event>;
  createOrganizer?: Maybe<GenericResponse>;
  createPayment?: Maybe<OrderResponse>;
  createSportEventPayment: OrderResponse;
  deleteCoupon?: Maybe<Coupon>;
  deleteEvent?: Maybe<Event>;
  deleteEventArtist?: Maybe<SuccessResponse>;
  deleteImageById?: Maybe<SuccessResponse>;
  deleteOrganizer?: Maybe<GenericResponse>;
  deleteSettingByKey?: Maybe<AppSetting>;
  deleteSpotlight: GenericResponse;
  deleteStaff?: Maybe<SuccessResponse>;
  deleteTicketType?: Maybe<EventTicketType>;
  exportGuestList?: Maybe<GenericResponse>;
  /** Generate ticket and send it to mobile_number */
  generateTicket?: Maybe<SuccessResponse>;
  generateTicketForTicketPurchase?: Maybe<GenericResponse>;
  getSettings?: Maybe<Array<Maybe<AppSetting>>>;
  issueRefund?: Maybe<RefundResponse>;
  logout?: Maybe<SuccessResponse>;
  notifyUpcomingEvent?: Maybe<Event>;
  onboardOrganizer?: Maybe<OrganizerOnBoarding>;
  redeemCoupon?: Maybe<RedeemCouponResponse>;
  refundTicket?: Maybe<GenericResponse>;
  resendTicket?: Maybe<GenericResponse>;
  sendWhatsAppToInvitees?: Maybe<SuccessResponse>;
  setConvenienceFeeForEvent?: Maybe<SuccessResponse>;
  submitQRCode?: Maybe<SubmitQrCodeResponse>;
  supportLogin?: Maybe<LoginResponse>;
  updateCoupon?: Maybe<Coupon>;
  updateEvent?: Maybe<Event>;
  /** only for superadmin */
  updateOrganizer?: Maybe<User>;
  updateSpotlight: GenericResponse;
  updateStaff?: Maybe<User>;
  upsertEventArtist?: Maybe<EventArtist>;
  upsertSetting?: Maybe<AppSetting>;
  userLogin?: Maybe<User>;
  userRequestRefund?: Maybe<GenericResponse>;
};


export type MutationAddInviteeArgs = {
  event_id: Scalars['ID']['input'];
  mobile_number: Scalars['String']['input'];
  number_of_tickets: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationAddOrganizerArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAddSpotlightArgs = {
  image: Scalars['Upload']['input'];
  is_external?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddStaffArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationAdminLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateCouponArgs = {
  data: Array<CreateCouponInput>;
};


export type MutationCreateEventArgs = {
  address: Scalars['String']['input'];
  artists?: InputMaybe<Array<InputMaybe<EventArtistsInput>>>;
  city: Scalars['String']['input'];
  convenience_fee?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date: Scalars['DateTime']['input'];
  event_images: Array<InputMaybe<Scalars['Upload']['input']>>;
  event_ticket_types: Array<InputMaybe<CreateEventTicketTypeInput>>;
  event_type?: InputMaybe<EventType>;
  faq?: InputMaybe<Scalars['String']['input']>;
  is_private_event?: InputMaybe<Scalars['Boolean']['input']>;
  is_published: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  open_mic_link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  org_contact_number: Scalars['String']['input'];
  organizer_name: Scalars['String']['input'];
  start_booking_date?: InputMaybe<Scalars['DateTime']['input']>;
  start_date: Scalars['DateTime']['input'];
};


export type MutationCreateOrganizerArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreatePaymentArgs = {
  coupon_hash?: InputMaybe<Scalars['String']['input']>;
  event_ticket_type_id: Scalars['ID']['input'];
  is_gift?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_number: Scalars['String']['input'];
  num_of_tickets: Scalars['Int']['input'];
  recipient_message?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_phone?: InputMaybe<Scalars['String']['input']>;
  tip_amount?: InputMaybe<Scalars['Float']['input']>;
  tip_message?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateSportEventPaymentArgs = {
  is_gift?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_number: Scalars['String']['input'];
  number_of_tickets?: InputMaybe<Scalars['Int']['input']>;
  recipient_message?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  seat_numbers: Array<Scalars['Int']['input']>;
  ticket_type_id: Scalars['Int']['input'];
  tip_amount?: InputMaybe<Scalars['Float']['input']>;
  tip_message?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationDeleteCouponArgs = {
  coupon_id: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventArtistArgs = {
  event_artist_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteOrganizerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSettingByKeyArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteSpotlightArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStaffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTicketTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExportGuestListArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  phone_number: Scalars['String']['input'];
};


export type MutationGenerateTicketArgs = {
  event_id: Scalars['ID']['input'];
  event_ticket_type_id: Scalars['ID']['input'];
  mobile_number: Scalars['String']['input'];
  num_of_tickets: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationGenerateTicketForTicketPurchaseArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationIssueRefundArgs = {
  amount: Scalars['Float']['input'];
  order_id: Scalars['String']['input'];
};


export type MutationNotifyUpcomingEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOnboardOrganizerArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  mobile_number: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRedeemCouponArgs = {
  coupon: Scalars['String']['input'];
  event_id: Scalars['ID']['input'];
};


export type MutationRefundTicketArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationResendTicketArgs = {
  event_ticket_purchase_id: Scalars['ID']['input'];
};


export type MutationSendWhatsAppToInviteesArgs = {
  event_id: Scalars['ID']['input'];
  id: Array<Scalars['ID']['input']>;
};


export type MutationSetConvenienceFeeForEventArgs = {
  convenience_fee: Scalars['Float']['input'];
  event_id: Scalars['ID']['input'];
};


export type MutationSubmitQrCodeArgs = {
  no_of_person_scanned?: InputMaybe<Scalars['Int']['input']>;
  qr_code: Scalars['String']['input'];
};


export type MutationSupportLoginArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationUpdateCouponArgs = {
  coupon_id: Scalars['ID']['input'];
  discount_percent?: InputMaybe<Scalars['Float']['input']>;
  event_id?: InputMaybe<Scalars['ID']['input']>;
  expiry_date?: InputMaybe<Scalars['DateTime']['input']>;
  is_published?: InputMaybe<Scalars['Boolean']['input']>;
  max_usage?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEventArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  convenience_fee?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  event_images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  event_type?: InputMaybe<EventType>;
  faq?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_private_event?: InputMaybe<Scalars['Boolean']['input']>;
  is_published: Scalars['Boolean']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  open_mic_link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  org_contact_number?: InputMaybe<Scalars['String']['input']>;
  organizer_name?: InputMaybe<Scalars['String']['input']>;
  seating_plan?: InputMaybe<Scalars['Upload']['input']>;
  start_booking_date?: InputMaybe<Scalars['DateTime']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOrganizerArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSpotlightArgs = {
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  is_external?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateStaffArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpsertEventArtistArgs = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  event_id: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  social_link?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpsertSettingArgs = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserLoginArgs = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserRequestRefundArgs = {
  event_id: Scalars['ID']['input'];
  phone_number: Scalars['String']['input'];
};

export type MyEventsPaginator = {
  __typename?: 'MyEventsPaginator';
  data?: Maybe<Array<Event>>;
  paginatorInfo: AppPaginatorInfo;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Response of 3rd party payment */
export type OrderResponse = {
  __typename?: 'OrderResponse';
  goto_url?: Maybe<Scalars['String']['output']>;
  mobile_number: Scalars['String']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  /** provider used for creating the order. razorpay | phonepe | sgpg */
  provider_type: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type OrganizerListPaginator = {
  __typename?: 'OrganizerListPaginator';
  currentPage: Scalars['Int']['output'];
  hasMorePages: Scalars['Boolean']['output'];
  organizers?: Maybe<Array<User>>;
  total: Scalars['Int']['output'];
};

export type OrganizerOnBoarding = {
  __typename?: 'OrganizerOnBoarding';
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile_number: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type OtpResponse = {
  __typename?: 'OtpResponse';
  otp_id: Scalars['ID']['output'];
};

export type PpResponse = {
  __typename?: 'PPResponse';
  data?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PaymentOrder = {
  __typename?: 'PaymentOrder';
  id: Scalars['ID']['output'];
  paymentable?: Maybe<PaymentableOrder>;
  paymentable_id: Scalars['ID']['output'];
  paymentable_type: Scalars['String']['output'];
};

export type PaymentableOrder = PhonePePaymentOrder | RzpayPaymentOrder | SgpgPaymentOrder;

export type PhonePePaymentOrder = {
  __typename?: 'PhonePePaymentOrder';
  error_detail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_instrument_type?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['String']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  refund_transaction_id?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transaction_id?: Maybe<Scalars['String']['output']>;
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  /** Get all admin events */
  adminEvents?: Maybe<Array<Maybe<Event>>>;
  admins: UserPaginator;
  checkPhonePeHealth?: Maybe<PpResponse>;
  checkTransactionStatus?: Maybe<PaymentOrder>;
  /** Get event attendees */
  eventAttendees?: Maybe<EventAttendeesResponse>;
  eventById?: Maybe<Event>;
  eventBySlug?: Maybe<Event>;
  events: EventPaginator;
  generateRawReports: GenericResponse;
  getConvenienceFee?: Maybe<ConvenienceFee>;
  /** for admin only */
  getCouponsForEvent?: Maybe<Array<Maybe<Coupon>>>;
  getEventTicketPurchase: EventTicketPurchasePaginator;
  getEvents: GetEventsPaginator;
  /** Get guest list for event id for auth admin */
  getGuestList: GuestListResponse;
  getInvitees: EventTicketPurchasePaginator;
  getMe?: Maybe<AuthResponse>;
  getPastEvents: EventPaginator;
  getSeatsForSportsEvent: SeatsForSportEvent;
  getSettingByKey?: Maybe<AppSetting>;
  getSpotlightList?: Maybe<Array<Spotlight>>;
  /** Get staffs for currently logged in 'Admin' */
  getStaffs?: Maybe<Array<Maybe<User>>>;
  getTicketPurchaseDetail?: Maybe<TicketPurchaseDetail>;
  getTicketStatsForEvent?: Maybe<TicketStatusResponse>;
  getTicketTypesForEvent?: Maybe<Event>;
  isTicketDownloadable?: Maybe<TicketDownloadableResponse>;
  myEvents: MyEventsPaginator;
  organizerList?: Maybe<OrganizerListPaginator>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryAdminsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCheckTransactionStatusArgs = {
  merchant_trnx_id: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventAttendeesArgs = {
  event_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Scalars['String']['input']>;
  ticket_type_id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventByIdArgs = {
  id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventBySlugArgs = {
  slug: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryEventsArgs = {
  current_datetime: Scalars['DateTime']['input'];
  first?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGenerateRawReportsArgs = {
  file_name: Scalars['String']['input'];
  q: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetConvenienceFeeArgs = {
  ticket_type_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetCouponsForEventArgs = {
  event_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetEventTicketPurchaseArgs = {
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetEventsArgs = {
  first: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetGuestListArgs = {
  event_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  ticket_type_id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetInviteesArgs = {
  event_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  mobile_number?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetPastEventsArgs = {
  current_datetime: Scalars['DateTime']['input'];
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSeatsForSportsEventArgs = {
  ticket_type_id: Scalars['Int']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetSettingByKeyArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketPurchaseDetailArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  qrcode: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketStatsForEventArgs = {
  event_id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryGetTicketTypesForEventArgs = {
  id: Scalars['ID']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryIsTicketDownloadableArgs = {
  order_id: Scalars['String']['input'];
  payment_id: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryMyEventsArgs = {
  first: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryOrganizerListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type RedeemCouponResponse = {
  __typename?: 'RedeemCouponResponse';
  /** discount percentage */
  amount: Scalars['Float']['output'];
  /** coupon hash */
  rc: Scalars['String']['output'];
  /** remaining coupon */
  remaining_cp: Scalars['Int']['output'];
};

export type RefundResponse = {
  __typename?: 'RefundResponse';
  reason?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type RzpayPaymentOrder = {
  __typename?: 'RzpayPaymentOrder';
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['Float']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_id?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type SgpgPaymentOrder = {
  __typename?: 'SGPGPaymentOrder';
  error_detail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order_id: Scalars['String']['output'];
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_instrument_type?: Maybe<Scalars['String']['output']>;
  refund_amount?: Maybe<Scalars['String']['output']>;
  refund_error_detail?: Maybe<Scalars['String']['output']>;
  refund_status?: Maybe<Scalars['String']['output']>;
  refund_transaction_id?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transaction_id?: Maybe<Scalars['String']['output']>;
};

export type SeatsForSportEvent = {
  __typename?: 'SeatsForSportEvent';
  all_seats?: Maybe<Array<Scalars['Int']['output']>>;
  available_seats?: Maybe<Array<Scalars['Int']['output']>>;
  /** cv for a single ticket calculated off of single ticket price */
  convenience_fee: Scalars['Float']['output'];
  /** price for single ticket of a particular ticket type */
  price: Scalars['Float']['output'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type SportGuestList = {
  __typename?: 'SportGuestList';
  data?: Maybe<Array<SportTicketPurchase>>;
  paginatorInfo: AppPaginatorInfo;
};

export type SportTicketPurchase = {
  __typename?: 'SportTicketPurchase';
  amount_paid: Scalars['Float']['output'];
  /** Organizers contact number */
  contact_number: Scalars['String']['output'];
  convenience_fee?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  eventTicketType?: Maybe<SportTicketType>;
  event_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_gift?: Maybe<Scalars['Boolean']['output']>;
  /** User mobile number */
  mobile_number?: Maybe<Scalars['String']['output']>;
  number_of_tickets: Scalars['Int']['output'];
  paymentOrder?: Maybe<PaymentOrder>;
  /** Ticket payment status. Will be set according to status received from 3rd party payment provider Note: this is not 3rd party payment provider status */
  payment_status: Scalars['String']['output'];
  pdf_media_id?: Maybe<Scalars['String']['output']>;
  qrcode?: Maybe<Scalars['String']['output']>;
  recipient_message?: Maybe<Scalars['String']['output']>;
  recipient_name?: Maybe<Scalars['String']['output']>;
  recipient_phone?: Maybe<Scalars['String']['output']>;
  scanned_at?: Maybe<Scalars['DateTime']['output']>;
  scanned_by?: Maybe<Scalars['ID']['output']>;
  /** general does not have seat number */
  seat_numbers: Array<Scalars['Int']['output']>;
  should_consider_seat: Scalars['Boolean']['output'];
  ticket_path?: Maybe<Scalars['String']['output']>;
  tickets_scanned_count: Scalars['Int']['output'];
  tip_amount: Scalars['Float']['output'];
  tip_message?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  whatsapp_sent_status?: Maybe<Scalars['String']['output']>;
};

export type SportTicketType = {
  __typename?: 'SportTicketType';
  end_seat_number: Scalars['Int']['output'];
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  should_consider_seat: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  start_seat_number: Scalars['Int']['output'];
  ticket_type: Scalars['String']['output'];
};

export type Spotlight = {
  __typename?: 'Spotlight';
  app_image_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: AppImage;
  /** if true, should open link(url) in new tab */
  is_external?: Maybe<Scalars['Boolean']['output']>;
  /** ascending order */
  order: Scalars['Int']['output'];
  /** optional url for when spotlight is clicked */
  url?: Maybe<Scalars['String']['output']>;
};

export type SubmitQrCodeResponse = {
  __typename?: 'SubmitQRCodeResponse';
  error?: Maybe<Scalars['String']['output']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message: Scalars['String']['output'];
};

export type TicketDownloadableResponse = {
  __typename?: 'TicketDownloadableResponse';
  amount: Scalars['Float']['output'];
  ticket_path?: Maybe<Scalars['String']['output']>;
};

export type TicketPurchaseDetail = EventTicketPurchase | SportTicketPurchase;

export type TicketStatusResponse = {
  __typename?: 'TicketStatusResponse';
  ticket_type_stats?: Maybe<Array<Maybe<TicketTypeStats>>>;
  /** Total amount excluding convenience fee */
  total_amount?: Maybe<Scalars['Float']['output']>;
  total_tickets_sold?: Maybe<Scalars['Int']['output']>;
  total_tip_amount?: Maybe<Scalars['Float']['output']>;
};

export type TicketTypeStats = {
  __typename?: 'TicketTypeStats';
  num_of_tickets: Scalars['Int']['output'];
  ticket_type: Scalars['String']['output'];
};

export type TicketTypeStatus = {
  __typename?: 'TicketTypeStatus';
  ticket_type: Scalars['String']['output'];
  ticket_type_id: Scalars['ID']['output'];
  /** possible values : `sold_out` | `filling_fast` | `few_left` | `available` */
  value: Scalars['String']['output'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['ID']['output']>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  role: Scalars['String']['output'];
  rzpay_account_id?: Maybe<Scalars['String']['output']>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
  verified_at?: Maybe<Scalars['DateTime']['output']>;
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'AuthResponse', user?: { __typename?: 'User', id: string } | null } | null };
