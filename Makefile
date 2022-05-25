.DEFAULT_GOAL := render
render:
	(cd ./src/functions ; sh render-functions.sh)
deploy_in-cluster:
	kubectl apply -k ./k8s-resources/overlays/in-cluster-eventing
	kubectl -n kyma-system rollout restart deployment monitoring-auth-proxy-grafana
	kubectl -n kyma-system rollout restart deployment tracing-auth-proxy
undeploy_in-cluster:
	kubectl delete -k ./k8s-resources/overlays/in-cluster-eventing   
deploy_ems:
	kubectl apply -k ./k8s-resources/overlays/ems-eventing
	kubectl -n kyma-system rollout restart deployment monitoring-auth-proxy-grafana
	kubectl -n kyma-system rollout restart deployment tracing-auth-proxy
undeploy_ems:
	kubectl delete -k ./k8s-resources/overlays/ems-eventing  
