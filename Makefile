run:
	docker compose up --detach

stop:
	docker compose down

restart: stop run

rebuild: stop
	docker build --no-cache --file dev.Dockerfile --tag biodiversitydata-se/hosted-portal-lab .
	docker compose up --detach

_clean-deps:
	rm Gemfile.lock

bump-deps: _clean-deps rebuild
