<template>
    <div>
        <div>publish list</div>
        <m-checkbox title="테스트" />
    </div>
</template>

<script>
import { ref } from 'vue';
import MCheckbox from 'src/components/MCheckbox.vue';
export default {
    components: { MCheckbox },
    name: 'publish',
    setup() {
        return {
            val: ref(true)
        };
    }
};
</script>
