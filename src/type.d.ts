import store from '@/store';
import { TConfig } from '@/common/config';
declare module 'vue/types/vue' {
    interface Vue extends TConfig {
        $store: store
    }
}