CREATE DATABASE IF NOT EXISTS WestBuy;
USE WestBuy;

create table Products (
    ID     int auto_increment primary key,
    Name   text not null,
    Price  int  null,
    SKU    text null,
    Model  text null,
    OnHand int  null,
    ImageURL text null
);
