.DEFAULT_GOAL := render
render:
	(cd ./src/functions ; sh render-functions.sh)
deploy_gardener:
	kubectl apply -k ./k8s-resources/overlays/gardener
	kubectl -n kyma-system rollout restart deployment monitoring-auth-proxy-grafana
undeploy_gardener:
	kubectl delete -k ./k8s-resources/overlays/gardener   
deploy_btp:
	kubectl apply -k ./k8s-resources/overlays/sapbtp
	kubectl -n kyma-system rollout restart deployment monitoring-auth-proxy-grafana
undeploy_btp:
	kubectl delete -k ./k8s-resources/overlays/sapbtp  
