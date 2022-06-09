# gh-create-docker-tag
Github Action for creating tag/image based on git ref

## Examples:
- Called during commit sha 469bf15ae1de93e11658553353ed14cde4c32f5a will return `tag: 469bf15`
- Called during tag v1.2.3 will return `tag: v1.2.3`

## Inputs

### `sha-length`

**Required** Length to keep as a tag for docker image
**Default**: `7`

### `registry-name`

**Optional** Registry name to create `image` in the format `image: private.registry.io/test:tag`

## Outputs

### `tag`

Docker image tag

### `name`

Docker image name

## Usage

### Create tag

#### Without registry
```yaml
name: publish
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: infraway/gh-create-docker-tag@v3.0
        id: docker_tag
      - name: Use docker tag
        run: echo "${{ steps.docker_tag.outputs.tag }}"
```

#### Without registry
```yaml
name: publish
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: infraway/gh-create-docker-tag@v3.0
        with:
          registry-name: private.registry.com/test-repo
        id: docker_tag
      - name: Use docker tag
        run: |
          echo "${{ steps.docker_tag.outputs.tag }}"
          echo "${{ steps.docker_tag.outputs.image }}"
```
