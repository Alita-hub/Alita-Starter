package com.alita.common.util.file.strategys;

import com.alita.common.util.file.FileStrategy;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

/**
 * 阿里云Oss存储策略
 * @author: alita
 */
@Component
public class OssFileStrategy extends FileStrategy {

    @Override
    public String upload(MultipartFile file) {
        return null;
    }

    @Override
    public InputStream download(String fileName) {
        return null;
    }

    @Override
    public void delete(String fileName) {

    }
}
