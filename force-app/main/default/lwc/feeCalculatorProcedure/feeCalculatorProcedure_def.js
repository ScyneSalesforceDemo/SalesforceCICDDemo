export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"contributor@gps.ido","userId":"005am000001A8FEQAE","userCurrencyCode":"USD","timeStamp":"2022-07-13T19:14:27.878Z","sOmniScriptId":"0jNam0000003siPUAQ","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"mockResponseMap":{},"ttlMinutes":5,"queueableChainableHeapSizeLimit":6,"queueableChainableCpuLimit":40000,"queueableChainableQueriesLimit":120,"additionalChainableResponse":{},"chainableActualTimeLimit":null,"chainableSoslQueriesLimit":null,"chainableQueryRowsLimit":null,"chainableDMLRowsLimit":null,"chainableHeapSizeLimit":null,"chainableCpuLimit":2000,"chainableDMLStatementsLimit":null,"chainableQueriesLimit":50,"rollbackOnError":false,"nameColumn":"","description":"","labelPlural":"","labelSingular":"","relationshipFieldsMap":[],"columnsPropertyMap":[],"includeAllActionsInResponse":false,"trackingCustomData":{},"linkToExternalObject":""},"prefillJSON":"{}","lwcId":"d4f6b46b-c81f-4e0d-5c38-3d5b337e16a8","labelMap":{"responseData":"responseData","MergeFees":"MergeFees","BusinessDiscount":"BusinessDiscount","ChairFee":"ChairFee","ResidenceFee":"ResidenceFee","PremiumFee":"PremiumFee","BaseFee":"BaseFee"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Calculation Action","propSetMap":{"disOnTplt":false,"label":"CalculationAction4","show":null,"actionMessage":"","chainOnStep":false,"remoteOptions":{"configurationName":"CPBaseFee"},"remoteMethod":"calculate","remoteClass":"omnistudio.PricingMatrixCalculationService","sendJSONNode":"inputData","sendJSONPath":"inputData","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"BaseFee","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bCalculationAction":true,"JSONPath":"BaseFee","lwcId":"lwc0"},{"type":"Calculation Action","propSetMap":{"disOnTplt":false,"label":"CalculationAction4","show":null,"actionMessage":"","chainOnStep":false,"remoteOptions":{"configurationName":"CPPremiumFee"},"remoteMethod":"calculate","remoteClass":"omnistudio.PricingMatrixCalculationService","sendJSONNode":"inputData","sendJSONPath":"inputData","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{"inputData:BaseFee":"%BaseFee:output:calculationResults:amount%"},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"PremiumFee","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bCalculationAction":true,"JSONPath":"PremiumFee","lwcId":"lwc1"},{"type":"Calculation Action","propSetMap":{"disOnTplt":false,"label":"CalculationAction5","show":null,"actionMessage":"","chainOnStep":false,"remoteOptions":{"configurationName":"CPResidenceFee"},"remoteMethod":"calculate","remoteClass":"omnistudio.PricingMatrixCalculationService","sendJSONNode":"inputData","sendJSONPath":"inputData","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"ResidenceFee","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bCalculationAction":true,"JSONPath":"ResidenceFee","lwcId":"lwc2"},{"type":"Calculation Action","propSetMap":{"disOnTplt":false,"label":"CalculationAction6","show":null,"actionMessage":"","chainOnStep":false,"remoteOptions":{"configurationName":"CPNoOfChairs"},"remoteMethod":"calculate","remoteClass":"omnistudio.PricingMatrixCalculationService","sendJSONNode":"inputData","sendJSONPath":"inputData","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"ChairFee","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bCalculationAction":true,"JSONPath":"ChairFee","lwcId":"lwc3"},{"type":"Calculation Action","propSetMap":{"disOnTplt":false,"label":"CalculationAction7","show":null,"actionMessage":"","chainOnStep":false,"remoteOptions":{"configurationName":"CPBusinessDiscount"},"remoteMethod":"calculate","remoteClass":"omnistudio.PricingMatrixCalculationService","sendJSONNode":"inputData","sendJSONPath":"inputData","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{"inputData:PremiumFee":"%PremiumFee:output:calculationResults:amount%","inputData:BaseFee":"%BaseFee:output:calculationResults:amount%"},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"BusinessDiscount","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bCalculationAction":true,"JSONPath":"BusinessDiscount","lwcId":"lwc4"},{"type":"List Merge Action","propSetMap":{"disOnTplt":false,"label":"ListAction1","show":null,"additionalChainableResponse":{},"actionMessage":"","chainOnStep":false,"updateFieldValue":{},"dynamicOutputFields":"","filterListFormula":"amount <> NULL","mergeListsOrder":["BaseFee:output:calculationResults","PremiumFee:output:calculationResults","ResidenceFee:output:calculationResults","ChairFee:output:calculationResults","BusinessDiscount:output:calculationResults"],"sortInDescendingOrder":false,"sortBy":[],"primaryListKey":"","hasPrimary":false,"allowMergeNulls":false,"mergeFields":[""],"advancedMergeMap":[],"advancedMerge":false,"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","returnOnlyFailureResponse":false,"returnOnlyAdditionalOutput":false,"sendOnlyAdditionalInput":false,"failureResponse":{},"additionalOutput":{},"additionalInput":{},"useFormulas":true,"failOnStepError":true,"failureConditionalFormula":"","executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"MergeFees","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"JSONPath":"MergeFees","lwcId":"lwc5"},{"type":"Response Action","propSetMap":{"disOnTplt":false,"label":"ResponseAction1","show":null,"vlcResponseHeaders":{},"responseDefaultData":{},"sendJSONNode":"","sendJSONPath":"","responseJSONNode":"","responseJSONPath":"","responseFormat":"JSON","returnFullDataJSON":false,"returnOnlyAdditionalOutput":false,"additionalOutput":{"totalFee":"=SUM(MergeFees:amount)","calculationDate":"","dueDate":"","charges":"%MergeFees%"},"useFormulas":true,"executionConditionalFormula":"","aggElements":{}},"offSet":0,"name":"responseData","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"JSONPath":"responseData","lwcId":"lwc6"}],"bReusable":false,"bpVersion":1,"bpType":"Fee","bpSubType":"Calculator","bpLang":"Procedure","bHasAttachment":false,"lwcVarMap":{}};