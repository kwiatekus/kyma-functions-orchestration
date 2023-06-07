.DEFAULT_GOAL := render
render:
	(cd ./src/functions ; sh render-functions.sh)
deploy_in-cluster:
	kubectl apply -k ./k8s-resources/overlays/in-cluster-eventing
undeploy_in-cluster:
	kubectl delete -k ./k8s-resources/overlays/in-cluster-eventing   
deploy_ems:
	kubectl apply -k ./k8s-resources/overlays/ems-eventing
undeploy_ems:
	kubectl delete -k ./k8s-resources/overlays/ems-eventing  
