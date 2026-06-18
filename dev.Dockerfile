# This file is for building the local dev image

FROM ruby:2.7

WORKDIR /site

COPY Gemfile* /site
RUN gem cleanup
RUN BUNDLE_FORCE_RUBY_PLATFORM=true bundle install

ENV TZ=Europe/Stockholm

# Main app
EXPOSE 4000
# Livereload
EXPOSE 35729

VOLUME /site

ENTRYPOINT [ "sh", "/site/_script/entrypoint.sh" ]
