const { RESTDataSource } = require('apollo-datasource-rest')

// const api = 'https://ikibhala.turnkeyafrica.com/api'

const url = 'https://ikibhala.turnkeyafrica.com/api/gis/setups'

class ProductAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = url
    }

    // add authorization bearer token
    setHeaders(request) {
        request.headers.set('Authorization ', this.context.token)
    }

    productsReducer(product) {
        return {
            accommodation: product.accommodation,
            alloqNb: product.alloqNb,
            authWithoutClause: product.authWithoutClause,
            autoPostReinsurance: product.autoPostReinsurance,
            cashBackApplicable: product.cashBackApplicable,
            claimPrefix: product.claimPrefix,
            claimScreenCode: product.claimPrefix,
            code: product.code,
            createdBy: product.createdBy,
            createdDate: product.createdDate,
            description: product.description,
            directProduction: product.directProduction,
            dpRenChange: product.dpRenChange,
            earthquake: product.earthquake,
            editPolNo: product.editPolNo,
            endosMinPrem: product.endosMinPrem,
            expiryPeriod: product.expiryPeriod,
            extensionMappingCode: product.extensionMappingCode,
            genCoverNote: product.genCoverNote,
            hoc: product.hoc,
            id: product.id,
            incentiveMulti: product.incentiveMulti,
            industryCode: product.industryCode,
            installmentAllowed: product.installmentAllowed,
            insuredAccumLimit: product.insuredAccumLimit,
            interfaceType: product.interfaceType,
            marine: product.marine,
            maximumExtensions: product.maximumExtensions,
            minimumPremium: product.minimumPremium,
            minimumSubClassesNo: product.minimumSubClassesNo,
            modifiedBy: product.modifiedBy,
            modifiedDate: product.modifiedDate,
            moreThanAnnualCover: product.moreThanAnnualCover,
            motoVerfy: product.motoVerfy,
            multipleClass: product.multipleClass,
            newProCode: product.newProCode,
            openCover: product.openCover,
            openPolicyAllowed: product.openPolicyAllowed,
            order: product.order,
            organizationId: product.organizationId,
            pinRequired: product.pinRequired,
            policyAccumLimit: product.policyAccumLimit,
            policyCodePages: product.policyCodePages,
            policyDocPages: product.policyDocPages,
            policyPrefix: product.policyPrefix,
            policyWordDoc: product.policyWordDoc,
            prereqProShtDesc: product.prereqProShtDesc,
            prgsCode: product.prgsCode,
            proDefault: product.proDefault,
            binders: product.Binder,
            ProductAdditionalBenefit: product.ProductAdditionalBenefit,
            productSubClasses: product.ProductSubClass
        }
    }

    async getAllProducts() {
        const response = await this.get('products')

        return Array.isArray(response) ? response.map(product => this.productsReducer(product)) : []
    }
}

module.exports = ProductAPI
