databaseChangeLog = {

    changeSet(author: "mike (generated)", id: "1482877989175-1") {
        createSequence(sequenceName: "hibernate_sequence")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-2") {
        createTable(tableName: "conference_feedback") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "conference_feedbackPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "comments", type: "VARCHAR(255)")

            column(name: "expand", type: "FLOAT4")

            column(name: "favorite_talk_id", type: "BIGINT")

            column(name: "happy_hour", type: "FLOAT4")

            column(name: "hospitality", type: "FLOAT4")

            column(name: "how_heard", type: "VARCHAR(255)")

            column(name: "keynotes", type: "FLOAT4")

            column(name: "overall", type: "FLOAT4")

            column(name: "registration", type: "FLOAT4")

            column(name: "speaker_quality", type: "FLOAT4")

            column(name: "venue", type: "FLOAT4")
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-3") {
        createTable(tableName: "feedback") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "feedbackPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "comments", type: "VARCHAR(255)")

            column(name: "date_created", type: "timestamp") {
                constraints(nullable: "false")
            }

            column(name: "rating", type: "FLOAT4") {
                constraints(nullable: "false")
            }

            column(name: "talk_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-4") {
        createTable(tableName: "role") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "rolePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "authority", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-5") {
        createTable(tableName: "speaker") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "speakerPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "bio", type: "VARCHAR(255)")

            column(name: "date_created", type: "timestamp")

            column(name: "email", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "employer", type: "VARCHAR(255)")

            column(name: "full_name", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "github", type: "VARCHAR(255)")

            column(name: "image_id", type: "BIGINT")

            column(name: "last_updated", type: "timestamp") {
                constraints(nullable: "false")
            }

            column(name: "reimbursement", type: "VARCHAR(255)")

            column(name: "tshirt", type: "VARCHAR(255)")

            column(name: "twitter", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-6") {
        createTable(tableName: "speaker_image") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "speaker_imagePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "image", type: "BYTEA") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-7") {
        createTable(tableName: "talk") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "talkPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "approved", type: "BOOLEAN")

            column(name: "conference_year", type: "BIGINT")

            column(name: "date_created", type: "timestamp")

            column(name: "last_updated", type: "timestamp")

            column(name: "location", type: "VARCHAR(255)")

            column(name: "other", type: "VARCHAR(255)")

            column(name: "speaker_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "talk_abstract", type: "VARCHAR(255)")

            column(name: "talk_time", type: "timestamp")

            column(name: "title", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "track", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-8") {
        createTable(tableName: "user") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "userPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "account_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "account_locked", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "enabled", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "password", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "password_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "username", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-9") {
        createTable(tableName: "user_role") {
            column(name: "user_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "role_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "mike (generated)", id: "1482877989175-10") {
        addPrimaryKey(columnNames: "user_id, role_id", constraintName: "user_rolePK", tableName: "user_role")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-11") {
        addUniqueConstraint(columnNames: "authority", constraintName: "UC_ROLEAUTHORITY_COL", tableName: "role")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-12") {
        addUniqueConstraint(columnNames: "username", constraintName: "UC_USERUSERNAME_COL", tableName: "user")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-13") {
        addForeignKeyConstraint(baseColumnNames: "image_id", baseTableName: "speaker", constraintName: "FK1qj7bp17r3uktmfxppig6fvkq", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "speaker_image")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-14") {
        addForeignKeyConstraint(baseColumnNames: "user_id", baseTableName: "user_role", constraintName: "FK859n2jvi8ivhui0rl0esws6o", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "user")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-15") {
        addForeignKeyConstraint(baseColumnNames: "role_id", baseTableName: "user_role", constraintName: "FKa68196081fvovjhkek5m97n3y", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "role")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-16") {
        addForeignKeyConstraint(baseColumnNames: "speaker_id", baseTableName: "talk", constraintName: "FKamxc8imwqjp5lmalfe4byharr", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "speaker")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-17") {
        addForeignKeyConstraint(baseColumnNames: "talk_id", baseTableName: "feedback", constraintName: "FKo3m1ipxa6ek6vi9238wfkac2n", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "talk")
    }

    changeSet(author: "mike (generated)", id: "1482877989175-18") {
        addForeignKeyConstraint(baseColumnNames: "favorite_talk_id", baseTableName: "conference_feedback", constraintName: "FKrk1ib9m3ck6nv0ld7sciej8hj", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "talk")
    }

    changeSet(author: "mike", id: "expand talkAbstract column"){
        modifyDataType(columnName: 'talk_abstract', tableName: 'talk', newDataType: 'varchar(1024)')
    }
}
