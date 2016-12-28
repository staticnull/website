drop database if exists midwestjs;
drop user if exists midwestjs_prod;

drop database if exists midwestjs_test;
drop user if exists midwestjs_test;

drop database if exists midwestjs_dev;
drop user if exists midwestjs_dev;

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

create database midwestjs_dev;
create user midwestjs_dev;
\c midwestjs_dev
create schema midwestjs;
GRANT ALL PRIVILEGES ON schema midwestjs to midwestjs_dev;
ALTER DATABASE midwestjs_dev set search_path=midwestjs;