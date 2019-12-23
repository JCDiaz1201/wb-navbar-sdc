CREATE TABLE westbuy (
  Id SERIAL not null PRIMARY KEY,
  Name text not null,
  Price int null,
  SKU text null,
  Model text null,
  OnHand int null,
  ImageURL text null
);