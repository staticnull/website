drop database if exists midwestjs;
drop user if exists midwestjs_prod;

drop database if exists midwestjs_test;
drop user if exists midwestjs_test;

create database midwestjs;
create user midwestjs_prod;
\c midwestjs
create schema midwestjs;
GRANT ALL PRIVILEGES ON schema midwestjs to midwestjs_prod;
ALTER DATABASE midwestjs set search_path=midwestjs;

create database midwestjs_test;
create user midwestjs_test;
\c midwestjs_test
create schema midwestjs;
GRANT ALL PRIVILEGES ON schema midwestjs to midwestjs_test;
ALTER DATABASE midwestjs_test set search_path=midwestjs;