android_beta:
	cd android && \
	./gradlew clean && \
	./gradlew assembleRelease && \
	cd ..

ios_beta:
	cd ios && \
	fastlane beta && \
	cd ..

.PHONY: ios
ios:
	rm -rf node_modules && \
	npm i && \
	cd ios && \
	pod install && \
	cd .. && \
	npm run ios