.DEFAULT_GOAL := render
render:
	(cd ./src/functions ; sh render-functions.sh)
deploy_gardener:
	kubectl apply -k ./k8s-resources/overlays/gardener
undeploy_gardener:
	kubectl delete -k ./k8s-resources/overlays/gardener   
deploy_btp:
	kubectl apply -k ./k8s-resources/overlays/sapbtp
undeploy_btp:
	kubectl delete -k ./k8s-resources/overlays/sapbtp  
