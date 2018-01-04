php ../valit/bin/listOfChecks.php > _data/validationChecks.yml

rm -fr docs/valit/api

sami update --force _build/valit-api-sami.php
