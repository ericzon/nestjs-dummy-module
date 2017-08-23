import { Module, Shared } from '@nestjs/common';
import { DummyService } from './services/dummy.service';

@Shared()
@Module({
    components: [ DummyService ],
    exports: [ DummyService ]
})
export class DummyModule {}