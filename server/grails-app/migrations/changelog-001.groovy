databaseChangeLog = {

    changeSet(author: "mike (generated)", id: "1485796707299-1") {
        addColumn(tableName: "speaker") {
            column(name: "accommodations_required", type: "boolean")
        }
    }

    changeSet(author: "mike (generated)", id: "1485796707299-2") {
        addColumn(tableName: "speaker") {
            column(name: "position", type: "varchar(255)")
        }
    }

    changeSet(author: "mike (generated)", id: "1485796707299-3") {
        addColumn(tableName: "speaker") {
            column(name: "travel_required", type: "boolean")
        }
    }

    changeSet(author: "mike (generated)", id: "1485796707299-4") {
        addColumn(tableName: "speaker") {
            column(name: "traveling_from", type: "varchar(255)")
        }
    }

    changeSet(author: "mike (generated)", id: "1485796707299-5") {
        addUniqueConstraint(columnNames: "email", constraintName: "UC_SPEAKEREMAIL_COL", tableName: "speaker")
    }

    changeSet(author: "cory", id: "fixAbstract") {
        modifyDataType(tableName: "talk", columnName: "talk_abstract", newDataType: "varchar(1024)")
        confirm "Successfully updated the description column."
    }

    changeSet(author: "cory", id: "enlargenBio") {
        modifyDataType(tableName: "speaker", columnName: "bio", newDataType: "varchar(4096)")
        confirm "Successfully updated the bio column."
    }
}
