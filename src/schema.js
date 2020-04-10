const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        products: [Product]
        authenticationError: String
    }

    type Product {
        id: ID!
        accommodation: String,
        alloqNb: String
        authWithoutClause: String
        autoPostReinsurance: String
        cashBackApplicable:	String
        claimPrefix: String
        claimScreenCode: String
        code: String
        createdBy: String
        createdDate: Int
        description: String
        directProduction: String
        dpRenChange: String
        earthquake: String
        editPolNo: String
        endosMinPrem: Int
        expiryPeriod: String
        extensionMappingCode: String
        genCoverNote: String
        hoc: String
        incentiveMulti: String
        industryCode: Int
        installmentAllowed: String
        insuredAccumLimit: Int
        interfaceType: String
        marine: String
        maximumExtensions: String
        minimumPremium: Int
        minimumSubClassesNo: Int
        modifiedBy: String
        modifiedDate: Int
        moreThanAnnualCover: String
        motoVerfy: String
        multipleClass: String
        newProCode: Int
        openCover: String
        openPolicyAllowed: String
        order: Int
        organizationId: Int
        pinRequired: String
        policyAccumLimit: Int
        policyCodePages: Int
        policyDocPages: Int
        policyPrefix: String
        policyWordDoc: String
        prereqProShtDesc: String
        prgsCode: Int
        proDefault: String
        binder: [Binder]
        productAdditionalBenefit: [ProductAdditionalBenefit]
        productSubClasses: [ProductSubClass] 
    }

    type SubClass {
        id: ID!
    }

    type Binder {
        id: ID!
    }

    type ProductAdditionalBenefit {
        id: ID!
    }

    type  ProductSubClass {
        id: ID!
    }
`;

module.exports = typeDefs;
